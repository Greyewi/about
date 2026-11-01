const puppeteer = require('puppeteer')
async function main() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto('http://localhost:3041/', { waitUntil: 'networkidle0' })
  await new Promise(r => setTimeout(r, 9000))
  const info = await page.evaluate(() => {
    const h1 = document.querySelector('h1')
    const visible = h1.querySelector('span[aria-hidden="true"]')
    const hidden = h1.querySelector('span:not([aria-hidden])')
    return {
      h1FullText: h1.textContent,
      visibleSpanText: visible ? visible.textContent : null,
      hiddenSpanRect: hidden ? hidden.getBoundingClientRect().toJSON() : null,
      h1Rect: h1.getBoundingClientRect().toJSON(),
    }
  })
  console.log(JSON.stringify(info, null, 2))
  await page.screenshot({ path: '.superpowers/scripts/homepage-after-fix.png' })
  await browser.close()
}
main()
