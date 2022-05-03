import React, {useRef, useCallback, useLayoutEffect} from 'react'
import LineTo from 'react-lineto'

type ItemDirection = {
    id: string,
    to?: string,
    from?: string
}

const useFormatLine = (items: ItemDirection[], dispatch: any) => {
    let lines = useRef<JSX.Element[] | null>(items.map((block) => {
        if(block.from && !block.to) {
            return <LineTo key={block.id} from={block.from} to={block.id} delay={true}/>
        } else if(!block.from && block.to) {
            return <LineTo key={block.id} from={block.id} to={block.to} delay={true}/>
        } else if(block.from && block.to) {
            return <LineTo key={block.id} from={block.id} to={block.to} delay={true}/>
        }
        return <LineTo key={block.id} from={block.id} to={block.id}/>
    }))

    const onMoveLineAfterDrag = useCallback((id) => {
        dispatch({type: "CHANGE_ITEM_POSITION", payload: id})
    }, [])

    return [lines.current, onMoveLineAfterDrag]
}

export default useFormatLine