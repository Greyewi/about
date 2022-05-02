import {MMContainer} from './styles'
import DraggableItem from './DraggableItem'
import {initialState, Reducer} from "./Reducer";
import {useReducer} from "react";

const MindMap = () => {
    const [{items, lastChangedId}, dispatch] = useReducer(Reducer, initialState)

    return (
        <MMContainer>
            {items.map(({label, ...rest}) => <DraggableItem key={rest.id} lastChangedId={lastChangedId} dispatch={dispatch} {...rest}>{label}</DraggableItem> )}
        </MMContainer>
    )
}

export default MindMap