import { useEffect, useState } from "react"

export type Phase = 'idle' | 'typing' | 'done'

const BLINK_DURATION = 2000 // 2 full blink cycles before typing starts
const INTRO_HOLD = 2000 // how long the intro line stays on screen before erasing
const ERASE_SPEED_RATIO = 0.5 // erasing runs faster than typing

// Shows `intro` (if given) as-is from the first render, holds it, erases it,
// then types `text`.
export default function usePrintText(speed: number, text: string, intro?: string) {
  const [displayText, setDisplayText] = useState(intro ?? '')
  const [phase, setPhase] = useState<Phase>('idle')

  useEffect(() => {
    // `text`/`intro` are dependencies, so this effect re-runs whenever they
    // change — including without a remount (e.g. a client-side locale
    // switch). Reset explicitly; on a fresh mount this is a no-op.
    setDisplayText(intro ?? '')
    setPhase('idle')

    let cancelled = false
    let timer: ReturnType<typeof setTimeout> | null = null
    const wait = (ms: number) => new Promise<void>(resolve => {
      timer = setTimeout(resolve, ms)
    })

    const type = async (value: string, delay: number) => {
      setPhase('typing')
      for (let i = 1; i <= value.length; i++) {
        await wait(delay)
        if (cancelled) return
        setDisplayText(value.slice(0, i))
      }
    }

    const erase = async (value: string) => {
      setPhase('typing')
      for (let i = value.length - 1; i >= 0; i--) {
        await wait(speed * ERASE_SPEED_RATIO)
        if (cancelled) return
        setDisplayText(value.slice(0, i))
      }
    }

    const run = async () => {
      if (intro) {
        // The intro is already on screen (rendered on the server): hold, erase.
        await wait(INTRO_HOLD)
        if (cancelled) return
        await erase(intro)
        if (cancelled) return
      }
      await wait(intro ? BLINK_DURATION / 2 : BLINK_DURATION)
      if (cancelled) return
      await type(text, speed)
      if (cancelled) return
      setPhase('done')
    }

    run()

    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [speed, text, intro])

  return { text: displayText, phase }
}
