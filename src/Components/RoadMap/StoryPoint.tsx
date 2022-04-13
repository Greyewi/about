import React, {useState, useEffect} from "react";
import {Addition, Expand, Point, Static} from "./styles";
import {PointI} from './StoryPointsList'


const toggle = <T, >(arr: T[], item: T): T[] => {
    if (arr.includes(item)) return arr.filter(i => i !== item)
    else return [...arr, item];
}

const StoryPoint = ({point, openedPoint, handleExpanded}: {point: PointI, openedPoint: string, handleExpanded: boolean}) => {
    const [expanded, setExpanded] = useState<string[]>([])

    const pointerToggle = (item: string) => () => {
        handleExpanded && setExpanded(prev => toggle<string>(prev, item))
    }

    useEffect(() => {
        !handleExpanded && setExpanded(prev => [...prev, openedPoint])
    }, [openedPoint])

    return (
        <Point onClick={pointerToggle(point.id)} clickable={handleExpanded}>
            <Addition>{point.addition}</Addition>
            <Expand
                isExpand={expanded.includes(point.id) || (!handleExpanded && point.id === openedPoint)}
                onClick={e => e.stopPropagation()}
                top={point.plotPosition}
            >
                {point.plot}
            </Expand>
            <Static>{point.date}</Static>
            <Expand
                isExpand={expanded.includes(point.id) || (!handleExpanded && point.id === openedPoint)}
                onClick={e => e.stopPropagation()}
                isSlide
                top={point.goalsPosition}
            >
                {point.goals}
            </Expand>
        </Point>
    )
}

export default StoryPoint