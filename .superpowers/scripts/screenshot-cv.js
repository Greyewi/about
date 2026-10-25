const puppeteer = require('puppeteer')
async function main() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 1500 })
  await page.goto('http://localhost:3000/ru/cv', { waitUntil: 'networkidle0' })
  await page.screenshot({ path: '.superpowers/scripts/ru-cv-1440.png', clip: { x: 0, y: 1150, width: 450, height: 300 } })
  await browser.close()
}
main()
