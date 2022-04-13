import {Line, MapContainer} from './styles'
import {StoryPointsList} from './StoryPointsList'
import StoryPoint from './StoryPoint'
import {useScrollPosition} from '../../Hooks/useScrollPosition'

const POINT_WIDTH = 800
const roadMapWidth = StoryPointsList.length * POINT_WIDTH

const RoadMap = () => {
    const [scrollPosition, setScrollPosition] = useScrollPosition(0, 200)

    return (
            <MapContainer
                onWheel={(e) => e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + e.deltaY}
                onScroll={e => {
                    setScrollPosition(e, Math.round(e.currentTarget.scrollLeft / (roadMapWidth - e.currentTarget.clientWidth) * 10))
                    if(e.currentTarget.offsetWidth + e.currentTarget.scrollLeft >= e.currentTarget.scrollWidth){
                        window.document.body.style.overflow = "auto"
                    }
                }}
                onMouseEnter={() => window.document.body.style.overflow = "hidden"}
                onMouseLeave={() => window.document.body.style.overflow = "auto"}
            >
                <Line width={roadMapWidth}>
                    {StoryPointsList.map((item, key) =>
                        <StoryPoint
                            point={item}
                            key={item.id + key}
                            openedPoint={StoryPointsList[scrollPosition].id}
                            handleExpanded={false}
                        />)}
                </Line>
            </MapContainer>
    )
}

export default RoadMap