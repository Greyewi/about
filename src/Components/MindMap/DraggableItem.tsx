import {useCallback, useRef, memo} from 'react'
import {MMItem} from "./styles"
import useTraceUpdate from "../../Hooks/useTraceUpdate";

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
    setMoveBlock?: any,
}

function DraggableItem({children, id, defaultTop = 250, defaultLeft = 250, setMoveBlock}: Props) {
    const insideRectRef = useRef<MutableRefObject | null>(null)
    const rootElementRef = useRef<HTMLDivElement>(null)

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
            setMoveBlock(id)
        }
    }, [setMoveBlock, id])

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
        </>

    )
}

const compareChangedId = (prev: Props, next: Props) => {
    if(next.lastChangedId === next.to || next.lastChangedId === next.id) {
        return false
    }
    return true
}

export default memo(DraggableItem, compareChangedId)