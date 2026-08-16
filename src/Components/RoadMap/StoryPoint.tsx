import React, {useState, memo, Fragment} from "react";
import {Addition, Expand, Point, Static, GoalPoint} from "./styles";
import type {RoadmapEntry} from '../../i18n/structure'
import type {RoadmapText} from '../../i18n/types'

interface StoryPointI {
  point: RoadmapEntry,
  text: RoadmapText,
  isOpenedPoint: boolean,
  handleExpanded: boolean
}

const StoryPoint = ({point, text, handleExpanded, isOpenedPoint}: StoryPointI) => {
    const [isExpanded, setExpanded] = useState<boolean>(false)
    const isExpand = isExpanded || (!handleExpanded && isOpenedPoint)

    return (
        <Point onClick={() => setExpanded(prev => !prev)} clickable={handleExpanded}>
            <Addition>{point.icon}</Addition>
            <Expand
                isExpand={isExpand}
                onClick={e => e.stopPropagation()}
                top={text.plotPosition ?? point.plotPosition}
            >
                {text.plot}
            </Expand>
            <Static>{point.date}</Static>
            <Expand
                isExpand={isExpand}
                onClick={e => e.stopPropagation()}
                isSlide
                top={text.goalsPosition ?? point.goalsPosition}
            >
                <span>
                    {text.goalsLabel}:{' '}
                    {text.goals.map((goal, index) => (
                        <Fragment key={goal.name}>
                            <GoalPoint>{goal.name}</GoalPoint>
                            {goal.note ? ` (${goal.note})` : ''}
                            {index < text.goals.length - 1 ? ', ' : ''}
                        </Fragment>
                    ))}
                </span>
            </Expand>
        </Point>
    )
}

export default memo(StoryPoint)
