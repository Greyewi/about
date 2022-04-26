import {MMContainer} from './styles'
import DraggableItem from './DraggableItem'
import useFormatLines from '../../Hooks/useFormatLines'

export type DragItem = {
    label: string,
    id: string,
    to?: string,
    from?: string,
    defaultTop?: number,
    defaultLeft?: number,
    dragCallback?: any,
}

const dataItems: DragItem[] = [
    {
        id: "html",
        to: "css",
        label: "HTML"
    },
    {
        id: "css",
        to: "js",
        label: "CSS",
        defaultTop: 400,
        defaultLeft: 400,
    },
    {
        id: "js",
        label: "JS",
        to: "react",
        defaultTop: 550
    },
    {
        id: "react",
        label: "React",
        defaultTop: 700,
        defaultLeft: 450,
    },
]

const MindMap = () => {
    const [lines, setLines] = useFormatLines(dataItems)

    return (
        <MMContainer>
            {dataItems.map(({label, ...rest}) => <DraggableItem key={rest.id} dragCallback={setLines} {...rest}>{label}</DraggableItem> )}
            {lines}
        </MMContainer>
    )
}

export default MindMap