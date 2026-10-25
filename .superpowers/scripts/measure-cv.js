const puppeteer = require('puppeteer')

async function measure(width) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width, height: 1000 })
  await page.goto('http://localhost:3010/ru/cv', { waitUntil: 'networkidle0' })

  const result = await page.evaluate(() => {
    // Find the aside paragraphs (personalInfo, skills, education) by caption text order.
    const captions = Array.from(document.querySelectorAll('*')).filter(el =>
      el.children.length === 0 === false
    )
    // Simpler: use the known structure - CVAsideCaption then CVAsideParagraph siblings.
    const asideCaptions = Array.from(document.querySelectorAll('div')).filter(d => {
      const style = getComputedStyle(d)
      return d.textContent && d.parentElement && d.parentElement.tagName === 'DIV'
    })
    return null
  })

  // Direct DOM walk using the CVLeftAside container's direct children in order:
  // h1, h3, SummaryWithPhoto, Caption, Paragraph(personalInfo), Caption, Paragraph(skills), Caption, Paragraph(education)
  const blocks = await page.evaluate(() => {
    const aside = document.querySelector('#cv-container')?.firstElementChild
    if (!aside) return { error: 'no aside found' }
    const children = Array.from(aside.children)
    const out = []
    for (const child of children) {
      const style = getComputedStyle(child)
      out.push({
        tag: child.tagName,
        text: child.textContent.slice(0, 60),
        setHeightStyle: style.height,
        scrollHeight: child.scrollHeight,
        offsetHeight: child.offsetHeight,
      })
    }
    return { children: out }
  })

  // Also measure skill rows individually for wrap/overlap
  const skillRows = await page.evaluate(() => {
    // CVAsideSkillLabelContainer rows - find by justify-content: space-between with a label child
    const candidates = Array.from(document.querySelectorAll('div')).filter(d => {
      const s = getComputedStyle(d)
      return s.display === 'flex' && s.justifyContent === 'space-between' && d.querySelector('label')
    })
    return candidates.map(row => {
      const rect = row.getBoundingClientRect()
      const span = row.querySelector('span')
      const label = row.querySelector('label')
      const spanRect = span ? span.getBoundingClientRect() : null
      const labelRect = label ? label.getBoundingClientRect() : null
      return {
        text: row.textContent,
        rowHeight: rect.height,
        rowScrollHeight: row.scrollHeight,
        spanBottom: spanRect ? spanRect.bottom : null,
        labelBottom: labelRect ? labelRect.bottom : null,
        overlap: spanRect && labelRect ? !(spanRect.right <= labelRect.left || labelRect.right <= spanRect.left) && Math.abs(spanRect.top - labelRect.top) < 2 === false : null,
      }
    })
  })

  await browser.close()
  return { width, blocks, skillRows }
}

async function main() {
  for (const width of [1440, 1000]) {
    const result = await measure(width)
    console.log(`\n=== width=${width} ===`)
    console.log(JSON.stringify(result, null, 2))
  }
}

main().catch(e => { console.error(e); process.exit(1) })
