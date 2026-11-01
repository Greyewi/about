import {Line, MapContainer} from './styles'
import {roadmapStructure} from '../../i18n/structure'
import {useTranslation} from '../../i18n/useTranslation'
import StoryPoint from './StoryPoint'
import useScrollPosition from './useScrollPosition'
import React, {useState, useEffect, useCallback, useRef} from "react"

const ROADMAP_WIDTH = roadmapStructure.length * 700

const RoadMap = () => {
    const {roadmap} = useTranslation()
    const bodyStyleRef = useRef<CSSStyleDeclaration | null>(null)

    useEffect(() => {
        const bodyStyle = window.document.body.style
        bodyStyleRef.current = bodyStyle
        return () => {
            bodyStyle.overflow = "auto"
        }
    }, [])

    const [scrollPosition, setScrollPosition] = useScrollPosition(0, 200)
    const [openedPointList, setOpenedPointList] = useState<string[]>([])
    const [prevScrollPosition, setPrevScrollPosition] = useState<number | null>(null)

    // Mark the point under the current scroll position as opened
    // (state adjusted during render instead of in an effect).
    if (scrollPosition !== prevScrollPosition) {
        setPrevScrollPosition(scrollPosition)
        setOpenedPointList(prev => [...prev, roadmapStructure[scrollPosition].id])
    }

    const handleScroll = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
        const target = e.currentTarget
        const scrollLeft = target.scrollLeft
        const clientWidth = target.clientWidth

        setScrollPosition(e, Math.round(scrollLeft / (ROADMAP_WIDTH - clientWidth) * (roadmapStructure.length -1)))

        target.scrollLeft = scrollLeft + e.deltaY
        const bodyStyle = bodyStyleRef.current
        if (!bodyStyle) return
        if (target.offsetWidth + scrollLeft >= target.scrollWidth) {
            bodyStyle.overflow = "auto"
        }
        if (target.offsetWidth + scrollLeft < target.scrollWidth) {
            bodyStyle.overflow = "hidden"
        }
    }, [setScrollPosition])

    const handleSetRoadMapFocus = useCallback(() => {
        const bodyStyle = bodyStyleRef.current
        if (typeof window === 'undefined' || !bodyStyle) return
        bodyStyle.overflow = window.scrollY === 0 ? "hidden" : "auto"
    }, [])

    const handleSetRoadMapBlur = useCallback(() => {
        if (bodyStyleRef.current) bodyStyleRef.current.overflow = "auto"
    }, [])

    return (
        <MapContainer
            onWheel={handleScroll}
            onMouseEnter={handleSetRoadMapFocus}
            onMouseLeave={handleSetRoadMapBlur}
        >
            <Line width={ROADMAP_WIDTH}>
                {roadmapStructure.map((item) =>
                    <StoryPoint
                        point={item}
                        text={roadmap[item.id]}
                        key={item.id}
                        isOpenedPoint={openedPointList.includes(item.id)}
                        handleExpanded={false}
                    />)}
            </Line>
        </MapContainer>
    )
}

export default RoadMap
