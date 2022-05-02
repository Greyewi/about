import {useState, useCallback} from 'react'
import {SteppedLineTo} from 'react-lineto'

const useFormatLine = ({id, to, from}: {id: string, to?: string, from?: string}, dispatch: any) => {
    const [lines, setLines] = useState<any>([])

    const onMoveLineAfterDrag: any = useCallback((id: string, to: string) => {
        if(to){
            setLines([
                <SteppedLineTo key={id + to } from={id} to={to}/>
            ])
            dispatch({type: "CHANGE_ITEM_POSITION", payload: id})
        } else if(!to && from) {
            dispatch({type: "CHANGE_ITEM_POSITION", payload: id})
        }
    }, [])

    return [lines, onMoveLineAfterDrag]
}

export default useFormatLine