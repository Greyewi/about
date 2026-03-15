import { useEffect, useRef, useState } from "react"

export type Phase = 'idle' | 'typing' | 'done'

const BLINK_DURATION = 2000 // 2 full blink cycles before typing starts

export default function usePrintText(speed: number, text: string) {
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState<Phase>('idle')
  const interval = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setPhase('typing')
      interval.current = setInterval(() => {
        setDisplayText(prev => {
          if (prev.length >= text.length - 1) {
            clearInterval(interval.current!)
            setPhase('done')
          }
          return prev + text[prev.length]
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
