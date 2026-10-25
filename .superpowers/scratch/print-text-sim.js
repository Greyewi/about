// Simulates usePrintText's state updater across a `text` prop change,
// exactly as it would run in the browser WITHOUT a remount (i.e. if the
// locale switch ever becomes a client-side transition instead of today's
// full document navigation). Used to produce RED (current code) and GREEN
// (fixed code) evidence for Finding 1.
//
// Run: node .superpowers/scratch/print-text-sim.js

const EN = "Hi there! I'm Suntsev Sergey.\n                I'm glad to see you on my site. Make yourself at home!"
const RU = "Здравствуйте! Меня зовут Сергей Сунцев.\n                Рад видеть вас на своём сайте."

console.log('EN length:', EN.length)
console.log('RU length:', RU.length)
console.log()

// ---------------------------------------------------------------------
// OLD (buggy) updater — mirrors the current source verbatim:
//
//   setDisplayText(prev => {
//     if (prev.length >= text.length - 1) {
//       clearInterval(interval.current!)
//       setPhase('done')
//     }
//     return prev + text[prev.length]
//   })
//
// displayText/phase are NOT reset when `text` changes, so `prev` carries
// over from whatever it was under the previous text.
// ---------------------------------------------------------------------
// Faithful step-by-step reproduction of the real setInterval loop.
function simulateOld(prevFull, text) {
  let prev = prevFull
  let ticks = 0
  while (true) {
    ticks++
    const stop = prev.length >= text.length - 1
    prev = prev + text[prev.length] // this is exactly `prev + text[prev.length]`
    if (stop) break
    if (ticks > 500) { console.log('  (runaway loop, aborting)'); break }
  }
  return { result: prev, ticks }
}

// ---------------------------------------------------------------------
// NEW (fixed) updater — resets to '' at the top of the effect whenever
// `text` changes (the effect already depends on `text`), and guards the
// append so `prev.length >= text.length` can never index past the end.
// ---------------------------------------------------------------------
function simulateNew(text) {
  // On text change, the fixed effect resets displayText to '' before
  // scheduling the blink timeout, so `prev` always starts fresh here.
  let prev = ''
  let ticks = 0
  while (true) {
    ticks++
    if (prev.length >= text.length) {
      break // guard: never index text[prev.length] out of bounds
    }
    prev = prev + text[prev.length]
    if (ticks > 500) { console.log('  (runaway loop, aborting)'); break }
  }
  return { result: prev, ticks }
}

console.log('=== RED: current (buggy) logic, text changes without remount ===')

console.log('\n-- EN -> RU (prev = full EN, 100 chars; new text = RU, 86 chars) --')
{
  const { result, ticks } = simulateOld(EN, RU)
  console.log('ticks:', ticks)
  console.log('result:', JSON.stringify(result))
  console.log('ends with "undefined"?', result.endsWith('undefined'))
}

console.log('\n-- RU -> EN (prev = full RU, 86 chars; new text = EN, 100 chars) --')
{
  const { result, ticks } = simulateOld(RU, EN)
  console.log('ticks:', ticks)
  console.log('result:', JSON.stringify(result))
  console.log('EN tail spliced on at index 86:', JSON.stringify(EN.slice(86)))
}

console.log()
console.log('=== GREEN: fixed logic, text changes without remount ===')

console.log('\n-- EN -> RU (fixed: restarts from empty against RU) --')
{
  const { result, ticks } = simulateNew(RU)
  console.log('ticks:', ticks)
  console.log('result:', JSON.stringify(result))
  console.log('matches RU exactly?', result === RU)
  console.log('contains "undefined"?', result.includes('undefined'))
}

console.log('\n-- RU -> EN (fixed: restarts from empty against EN) --')
{
  const { result, ticks } = simulateNew(EN)
  console.log('ticks:', ticks)
  console.log('result:', JSON.stringify(result))
  console.log('matches EN exactly?', result === EN)
  console.log('contains "undefined"?', result.includes('undefined'))
}
