import {useEffect, useRef, useState} from "react"

export default function usePrintText(speed: number, text: string) {
  const [legend, setLegend] = useState('')
  const interval = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    interval.current = setInterval(() => {
      setLegend(prev => {
        if(prev.length >= (text.length - 1)) {
          clearInterval(interval.current!)
        }
        return prev + text[prev.length]
      })
    }, speed)

    return () => {
      clearInterval(interval.current!)
      interval.current = null
    }
  }, [speed, text])

  return legend
}