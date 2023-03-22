import {useEffect, useRef, useState} from "react"

export default function usePrintText(speed: number, text: string) {
  const [legend, setLegend] = useState('')
  const interval = useRef<(NodeJS.Timer | null)>(null)

  useEffect(() => {
    interval.current = setInterval(() => {
      setLegend(prev => {
        if(prev.length >= (text.length - 1)) {
          clearInterval(Number(interval.current))
        }
        return prev + text[prev.length]
      })
    }, speed)
  }, [speed, text])

  return legend
}