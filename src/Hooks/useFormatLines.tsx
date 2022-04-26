import {useState} from 'react'
import {DragItem} from '../Components/MindMap'
import {SteppedLineTo} from 'react-lineto'

const useFormatLines = (dataItems: DragItem[]) => {
    const [lines, setLines] = useState(dataItems.filter(f => !!f.to).map(i => <SteppedLineTo key={i.id} from={i.id} to={i.to || ''}/>))

    return [lines, setLines]
}

export default useFormatLines