import { useEffect, useRef, useState } from "react"

export type Phase = 'idle' | 'typing' | 'done'

const BLINK_DURATION = 2000 // 2 full blink cycles before typing starts

export default function usePrintText(speed: number, text: string) {
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState<Phase>('idle')
  const interval = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // `text` is a dependency, so this effect re-runs whenever it changes —
    // including when it changes without a remount (e.g. a future
    // client-side locale switch). Reset explicitly rather than relying on
    // state carried over from the previous text: on a genuine fresh mount
    // these are already '' / 'idle', so the reset is a no-op there.
    setDisplayText('')
    setPhase('idle')

    timeout.current = setTimeout(() => {
      setPhase('typing')
      interval.current = setInterval(() => {
        setDisplayText(prev => {
          // Guard: never index past the end of `text`. Without this,
          // a text change combined with stale `prev` could append the
          // literal string "undefined" (prev.length > text.length) or
          // splice on characters from the wrong string.
          if (prev.length >= text.length) {
            clearInterval(interval.current!)
            setPhase('done')
            return prev
          }
          const next = prev + text[prev.length]
          if (next.length >= text.length) {
            clearInterval(interval.current!)
            setPhase('done')
          }
          return next
        })
      }, speed)
    }, BLINK_DURATION)

    return () => {
      clearTimeout(timeout.current!)
      clearInterval(interval.current!)
      timeout.current = null
      interval.current = null
    }
  }, [speed, text])

  return { text: displayText, phase }
}
