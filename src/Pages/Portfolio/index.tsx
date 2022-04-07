import React, {useState} from 'react'
import {Line, MapContainer, Point, Expand, Static, Addition} from './styles'
import SchoolIcon from '@mui/icons-material/School'
import BoyIcon from '@mui/icons-material/Boy';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PsychologyIcon from '@mui/icons-material/Psychology';

const toggle = <T, >(arr: T[], item: T): T[] => {
    if (arr.includes(item)) return arr.filter(i => i !== item)
    else return [...arr, item];
}

interface PointI {
    id: string,
    date: string | JSX.Element,
    plot: string,
    addition?: JSX.Element
}

const historyMap: PointI[] = [
    {
        id: "the first time",
        date: '2011',
        plot: "There was a first time when I was writing a code, it was a small step for student, but big step for the future developer",
        addition: <BoyIcon fontSize="large"/>
    },
    {
        id: "the second time",
        date: '2013',
        plot: "I have written my first web site. It was about OOP",
        addition: <SchoolIcon fontSize="large"/>
    },
    {
        id: "the third time",
        date: '2015',
        plot: "I have created my first web application.",
        addition: <WorkspacePremiumIcon fontSize="large"/>
    },
    {
        id: "the forth time",
        date: '2016',
        plot: "I gain my fist job as developer",
        addition: <WorkIcon fontSize="large"/>
    },
    {
        id: "the five time",
        date: '2017',
        plot: "I gain my second job as developer",
        addition: <WorkHistoryIcon fontSize="large"/>
    },
    {
        id: "the six time",
        date: '2018',
        plot: "I gain my third job as developer",
        addition: <LocationCityIcon fontSize="large"/>
    },
    {
        id: "the seven time",
        date: '2020',
        plot: "I gain my fourth job as developer",
        addition: <HomeWorkIcon fontSize="large"/>
    },
    {
        id: "the eight time",
        date: '2020',
        plot: "I leave out my fourth job and stated to work as a mentor",
        addition: <PsychologyIcon fontSize="large"/>
    },
]

const Portfolio = () => {
    const [expanded, setExpanded] = useState<string[]>([])
    const pointerToggle = (item: string) => () => {
        setExpanded(prev => toggle<string>(prev, item))
    }

    return (
        <MapContainer onWheel={(e) => e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + e.deltaY}>
            <Line width={historyMap.length * 400}>
                {historyMap.map((item, key) => {
                    return (
                        <Point key={item.id} onClick={pointerToggle(item.id)}>
                            <Addition>{item.addition}</Addition>
                            <Expand isExpand={expanded.includes(item.id)} onClick={e => e.stopPropagation()}>Text container</Expand>
                            <Static>{item.date}</Static>
                        </Point>
                    )
                })}
            </Line>
        </MapContainer>
    )
}

export default Portfolio