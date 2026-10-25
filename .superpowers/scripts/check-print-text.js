const puppeteer = require('puppeteer')

const EN_EXPECTED = `Hi there! I'm Suntsev Sergey.\n                I'm glad to see you on my site. Make yourself at home!`
const RU_EXPECTED = `Здравствуйте! Меня зовут Сергей Сунцев.\n                Рад видеть вас на своём сайте.`

function hasCyrillic(s) { return /[Ѐ-ӿ]/.test(s) }
function hasLatinLetters(s) { return /[A-Za-z]/.test(s) }

async function waitForTypingDone(page, timeoutMs) {
  await page.waitForFunction(
    () => {
      const el = document.querySelector('main, body')
      return true
    },
    { timeout: 100 }
  ).catch(() => {})
  // Poll the legend text until it stops growing (phase becomes 'done' is
  // internal state; we detect completion by the text staying stable across
  // two checks separated by the typing interval).
  let prev = null
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    const text = await page.evaluate(() => document.querySelector('[class*="Legend"]')?.textContent ?? '')
    if (text === prev && text.length > 0) return text
    prev = text
    await new Promise(r => setTimeout(r, 500))
  }
  return prev
}

async function main() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  console.log('--- Loading English homepage ---')
  await page.goto('http://localhost:3013/', { waitUntil: 'networkidle0' })
  const enText = await waitForTypingDone(page, 12000)
  console.log('EN legend text:', JSON.stringify(enText))
  console.log('EN matches expected:', enText === EN_EXPECTED)
  console.log('EN contains "undefined":', enText.includes('undefined'))
  console.log('EN contains Cyrillic (should be false):', hasCyrillic(enText))

  console.log('\n--- Clicking locale switcher to RU ---')
  // Locale switcher link text is "RU"
  const links = await page.$$('a')
  let clicked = false
  for (const link of links) {
    const t = await page.evaluate(el => el.textContent, link)
    if (t.trim() === 'RU') {
      await link.click()
      clicked = true
      break
    }
  }
  console.log('Clicked RU link:', clicked)

  // Full document navigation + sandbox click-to-nav delay noted in task (~4s);
  // give it generous time.
  await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 20000 }).catch(e => console.log('nav wait note:', e.message))

  const ruText = await waitForTypingDone(page, 12000)
  console.log('RU legend text:', JSON.stringify(ruText))
  console.log('RU matches expected:', ruText === RU_EXPECTED)
  console.log('RU contains "undefined":', ruText.includes('undefined'))
  console.log('RU contains stray Latin letters (should be false):', hasLatinLetters(ruText))
  console.log('current URL:', page.url())
  console.log('html lang:', await page.evaluate(() => document.documentElement.lang))

  await browser.close()
}

main().catch(e => { console.error(e); process.exit(1) })
