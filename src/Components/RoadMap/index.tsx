import {Line, MapContainer} from './styles'
import {StoryPointsDataList} from './StoryPointsDataList'
import StoryPoint from './StoryPoint'
import useScrollPosition from '../../Hooks/useScrollPosition'
import {useState, useEffect} from "react"

const POINT_WIDTH = 700
const roadMapWidth = StoryPointsDataList.length * POINT_WIDTH
const bodyStyle = window.document.body.style

const RoadMap = () => {
    const [scrollPosition, setScrollPosition] = useScrollPosition(0, 200)
    const [openedPointList, setOpenedPointList] = useState<string[]>([])
    console.log(bodyStyle.overflow)
    useEffect(() => setOpenedPointList(prev => [...prev, StoryPointsDataList[scrollPosition].id]), [scrollPosition])

    return (
            <MapContainer
                onWheel={(e) => {
                    const target = e.currentTarget
                    const scrollLeft = target.scrollLeft
                    const clientWidth = target.clientWidth

                    setScrollPosition(e, Math.round(scrollLeft / (roadMapWidth - clientWidth) * 10))

                    target.scrollLeft = scrollLeft + e.deltaY
                    if(target.offsetWidth + scrollLeft >= target.scrollWidth){
                        bodyStyle.overflow = "auto"
                    }
                    if(target.offsetWidth + scrollLeft < target.scrollWidth){
                        bodyStyle.overflow = "hidden"
                    }
                }}
                onMouseEnter={() => window.scrollY === 0 ? bodyStyle.overflow = "hidden" : bodyStyle.overflow = "auto"}
                onMouseLeave={() => bodyStyle.overflow = "auto"}
            >
                <Line width={roadMapWidth}>
                    {StoryPointsDataList.map((item, key) =>
                        <StoryPoint
                            point={item}
                            key={item.id + key}
                            isOpenedPoint={openedPointList.includes(item.id)}
                            handleExpanded={false}
                        />)}
                </Line>
            </MapContainer>
    )
}

export default RoadMap