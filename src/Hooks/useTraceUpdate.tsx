import {useEffect, useRef} from "react"

interface ObjectDict {
    [index: string]: any
}

export default function useTraceUpdate(props: any) {
    const prev = useRef(props)
    useEffect(() => {
        const changedProps = Object.entries(props).reduce(
            (accumulator: ObjectDict, [key, value]) => {
                if (prev.current[key] !== value) {
                    accumulator[key] = [prev.current[key], value]
                }
                return accumulator
            },
            {}
        )
        if (Object.keys(changedProps).length > 0) {
            console.log("Changed props:", changedProps)
        }
        prev.current = props
    })
}