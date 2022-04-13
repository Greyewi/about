import {useState} from 'react'
import {Line, MapContainer} from './styles'
import {StoryPointsList} from './StoryPointsList'
import StoryPoint from './StoryPoint'

const POINT_WIDTH = 800

const Portfolio = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0)
    return (
        <MapContainer
            onWheel={(e) => e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + e.deltaY}
            onScroll={e => setScrollPosition(Math.round(e.currentTarget.scrollLeft / ((StoryPointsList.length * POINT_WIDTH) - e.currentTarget.clientWidth) * 10))}
        >
            <Line width={StoryPointsList.length * POINT_WIDTH}>
                {StoryPointsList.map((item, key) => <StoryPoint point={item} key={item.id + key} openedPoint={StoryPointsList[scrollPosition].id} handleExpanded={false}/>)}
            </Line>
        </MapContainer>
    )
}

export default Portfolio