import {Line, MapContainer} from './styles'
import {StoryPointsDataList} from './StoryPointsDataList'
import StoryPoint from './StoryPoint'
import useScrollPosition from './useScrollPosition'
import {useState, useEffect, useCallback, useRef} from "react"

const RoadMap = () => {
    const {current} = useRef<{
        roadMapWidth: number,
        bodyStyle: CSSStyleDeclaration | null
    }>({
        roadMapWidth: StoryPointsDataList.length * 700,
        bodyStyle: null
    })

    useEffect(() => {
        current.bodyStyle = window.document.body.style
    }, []) // empty deps — runs once on mount; current is a stable ref value

    const [scrollPosition, setScrollPosition] = useScrollPosition(0, 200)
    const [openedPointList, setOpenedPointList] = useState<string[]>([])

    useEffect(() => setOpenedPointList(prev => [...prev, StoryPointsDataList[scrollPosition].id]), [scrollPosition])
    useEffect(() => {
        return () => {
            if (current.bodyStyle) current.bodyStyle.overflow = "auto"
        }
    }, [current])

    const handleScroll = useCallback((e) => {
        const target = e.currentTarget
        const scrollLeft = target.scrollLeft
        const clientWidth = target.clientWidth

        setScrollPosition(e, Math.round(scrollLeft / (current.roadMapWidth - clientWidth) * (StoryPointsDataList.length -1)))

        target.scrollLeft = scrollLeft + e.deltaY
        if (!current.bodyStyle) return
        if (target.offsetWidth + scrollLeft >= target.scrollWidth) {
            current.bodyStyle.overflow = "auto"
        }
        if (target.offsetWidth + scrollLeft < target.scrollWidth) {
            current.bodyStyle.overflow = "hidden"
        }
    }, [setScrollPosition, current])

    const handleSetRoadMapFocus = useCallback(() => {
        if (typeof window === 'undefined' || !current.bodyStyle) return
        current.bodyStyle.overflow = window.scrollY === 0 ? "hidden" : "auto"
    }, [current])

    const handleSetRoadMapBlur = useCallback(() => {
        if (current.bodyStyle) current.bodyStyle.overflow = "auto"
    }, [current])

    return (
        <MapContainer
            onWheel={handleScroll}
            onMouseEnter={handleSetRoadMapFocus}
            onMouseLeave={handleSetRoadMapBlur}
        >
            <Line width={current.roadMapWidth}>
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
