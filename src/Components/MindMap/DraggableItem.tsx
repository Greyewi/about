import {useCallback, useRef, memo, useLayoutEffect} from 'react'
import {MMItem} from "./styles"
import useFormatLines from './useFormatLines'

type MutableRefObject = {
    top: number
    left: number
}

type Props = {
    children: string,
    id: string,
    to?: string,
    from?: string,
    defaultTop?: number,
    defaultLeft?: number,
    dragCallback?: any,
    lastChangedId: string | null,
    lines?: any,
    dispatch?: any,
}

function DraggableItem({children, id, to, from, defaultTop = 250, defaultLeft = 250, lastChangedId, dispatch}: Props) {
    const insideRectRef = useRef<MutableRefObject | null>(null)
    const rootElementRef = useRef<HTMLDivElement>(null)
    const [line, movedLine] = useFormatLines({id, to, from}, dispatch)

    useLayoutEffect(() => {
        if(lastChangedId === to) {
            movedLine(id, to)
        }
    }, [lastChangedId])

    const handleDragStart = useCallback((e) => {
        const rect = e.target.getBoundingClientRect()
        insideRectRef.current = {top: e.clientY - rect.top, left: e.clientX - rect.left}
    }, [])

    const handleDragEnd = useCallback(() => {
        insideRectRef.current = null
    }, [])

    const handleDragOver = useCallback((e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }, [])

    const handleDragBlock = useCallback((e) => {
        e.preventDefault()
        if (insideRectRef.current && rootElementRef.current && e.clientY && e.clientX){
            const top = e.clientY - insideRectRef.current.top
            const left = e.clientX - insideRectRef.current.left

            rootElementRef.current.style.top = top + 'px'
            rootElementRef.current.style.left = left + 'px'
            movedLine(id, to)
        }
    }, [movedLine, id, to])

    return (
        <>
            <MMItem
                ref={rootElementRef}
                className={"block " + id}
                draggable
                style={{top: defaultTop + 'px', left: defaultLeft + 'px'}}
                onMouseDown={handleDragStart}
                onDrag={handleDragBlock}
                onMouseUp={handleDragEnd}
                onDragOver={handleDragOver}
            >
                {children}
            </MMItem>
            {line}
        </>

    )
}

export default memo(DraggableItem)