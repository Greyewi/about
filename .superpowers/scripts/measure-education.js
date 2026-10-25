const puppeteer = require('puppeteer')

async function measure(width) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width, height: 1000 })
  await page.goto('http://localhost:3010/ru/cv', { waitUntil: 'networkidle0' })

  const data = await page.evaluate(() => {
    const aside = document.querySelector('#cv-container')?.firstElementChild
    const children = Array.from(aside.children)
    const eduBlock = children[children.length - 1]
    const eduChildren = Array.from(eduBlock.children).map(c => ({
      tag: c.tagName,
      text: c.textContent,
      rect: c.getBoundingClientRect().toJSON(),
    }))
    const style = getComputedStyle(eduBlock)
    return {
      setHeight: style.height,
      scrollHeight: eduBlock.scrollHeight,
      offsetHeight: eduBlock.offsetHeight,
      eduChildren,
    }
  })
  await browser.close()
  return { width, data }
}

async function main() {
  for (const width of [1440, 1200, 1000]) {
    console.log(`\n=== width=${width} ===`)
    console.log(JSON.stringify(await measure(width), null, 2))
  }
}
main().catch(e => { console.error(e); process.exit(1) })
