import {useState, useCallback, useEffect} from 'react'
import {SteppedLineTo} from 'react-lineto'
import {ACTION_TYPES} from './Reducer'

const useFormatLine = ({id, to, from}: {id: string, to?: string[], from?: string}, dispatch: any) => {
    const [lines, setLines] = useState<any>([])

    const onMoveLineAfterDrag: any = useCallback((id: string) => {
        if(to && to.length){
            setLines(to.map(point => <SteppedLineTo key={id + point} from={id} to={point} borderColor="#82F9A1" borderWidth={2}/>))
            dispatch({type: ACTION_TYPES.CHANGE_ITEM_POSITION, payload: id})
        } else if(!to && from) {
            dispatch({type: ACTION_TYPES.CHANGE_ITEM_POSITION, payload: id})
        }
    }, [dispatch, from, to])

    useEffect(() => {
        dispatch({type: ACTION_TYPES.CHANGE_ITEM_POSITION, payload: id})
    }, [dispatch, id])


    return [lines, onMoveLineAfterDrag]
}

export default useFormatLine