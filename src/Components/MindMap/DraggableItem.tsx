import {useCallback, useRef, memo, useEffect} from 'react'
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

    useEffect(() => {
        if(lastChangedId === to) {
            movedLine(id, to)
        }
    }, [movedLine, id, to, lastChangedId])

    const handleDragStart = useCallback((e) => {
        const rect = e.target.getBoundingClientRect()
        insideRectRef.current = {top: e.pageY - rect.top, left: e.pageX - rect.left}
    }, [])

    const handleDragEnd = () => {
        insideRectRef.current = null
    }

    const handleDragOver = (e: { preventDefault: () => void; dataTransfer: { dropEffect: string } }) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }

    const handleDragBlock = useCallback((e) => {
        e.preventDefault()
        if (insideRectRef.current && rootElementRef.current && e.pageY && e.pageX){

            const top = e.pageY - insideRectRef.current.top + window.scrollY
            const left = e.pageX - insideRectRef.current.left + window.scrollX

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