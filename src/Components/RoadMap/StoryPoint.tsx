import React, {useState, memo} from "react";
import {Addition, Expand, Point, Static} from "./styles";
import {PointI} from './StoryPointsDataList'
import useTraceUpdate from '../../Hooks/useTraceUpdate'

const StoryPoint = ({point, handleExpanded, isOpenedPoint}: {point: PointI, isOpenedPoint: boolean, handleExpanded: boolean}) => {
    const [isExpanded, setExpanded] = useState<boolean>(false)

    useTraceUpdate({point, handleExpanded})

    return (
        <Point onClick={() => setExpanded(prev => !prev)} clickable={handleExpanded}>
            <Addition>{point.addition}</Addition>
            <Expand
                isExpand={isExpanded || (!handleExpanded && isOpenedPoint)}
                onClick={e => e.stopPropagation()}
                top={point.plotPosition}
            >
                {point.plot}
            </Expand>
            <Static>{point.date}</Static>
            <Expand
                isExpand={isExpanded || (!handleExpanded && isOpenedPoint)}
                onClick={e => e.stopPropagation()}
                isSlide
                top={point.goalsPosition}
            >
                {point.goals}
            </Expand>
        </Point>
    )
}

export default memo(StoryPoint)