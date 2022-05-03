import {MMContainer} from './styles'
import DraggableItem from './DraggableItem'
import {initialState, Reducer} from "./Reducer"
import {useLayoutEffect, useReducer} from "react"
import useFormatLine from './useFormatLines'
import useTraceUpdate from "../../Hooks/useTraceUpdate";

const MindMap = () => {
    const [{items, lastChangedId}, dispatch] = useReducer(Reducer, initialState)
    const [lines, setMoveBlock] = useFormatLine(items, dispatch)
    useTraceUpdate({lines, lastChangedId})

    useLayoutEffect(() => {
        dispatch({type: "CHANGE_ITEM_POSITION", payload: null})
    }, [lastChangedId])

    return (
        <MMContainer>
            {items.map(({label, ...rest}) => <DraggableItem key={rest.id} setMoveBlock={setMoveBlock} lastChangedId={lastChangedId} {...rest}>{label}</DraggableItem> )}
            {lines}
        </MMContainer>
    )
}

export default MindMap