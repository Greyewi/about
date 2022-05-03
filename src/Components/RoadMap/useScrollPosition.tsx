import {useState, UIEvent} from 'react'

const useScrollPosition = (defaultPosition: number, timeFrame: number): [number, (e: UIEvent<HTMLElement>, modify: number) => void] => {
    const [scrollPosition, setScrollPosition] = useState<number>(defaultPosition)

    const throttleCarry = ((timeFrame: number) => {
        let lastTime = 0
        return (e: UIEvent<HTMLElement>, modify: number) => {
            const now = Date.now()
            if (now - lastTime >= timeFrame) {
                setScrollPosition(modify)
                lastTime = now
            }
        }
    })(timeFrame)

    return [scrollPosition, throttleCarry]
}

export default useScrollPosition