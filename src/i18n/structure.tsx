import BoyIcon from "@mui/icons-material/Boy"
import SchoolIcon from "@mui/icons-material/School"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import WorkIcon from "@mui/icons-material/Work"
import WorkHistoryIcon from "@mui/icons-material/WorkHistory"
import LocationCityIcon from "@mui/icons-material/LocationCity"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import PsychologyIcon from "@mui/icons-material/Psychology"
import CoronavirusIcon from "@mui/icons-material/Coronavirus"
import GroupsIcon from "@mui/icons-material/Groups"
import CurrencyBitcoin from "@mui/icons-material/CurrencyBitcoin"
import SurfingIcon from "@mui/icons-material/Surfing"
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset"
import ShowChartIcon from "@mui/icons-material/ShowChart"
import CastleIcon from "@mui/icons-material/Castle"
import AcUnitIcon from "@mui/icons-material/AcUnit"

export const ROADMAP_IDS = [
  'first-code',
  'first-website',
  'first-web-app',
  'first-job',
  'asana-plugin',
  'product-company',
  'moscow-startup',
  'edtech-apps',
  'covid-marketplace',
  'israel-freelance',
  'mentoring',
  'back-to-russia',
  'crypto-switch',
  'israeli-citizenship',
  'play-to-earn',
  'trading-system',
  'monorepo-dnd',
  'ton-company',
] as const

export type RoadmapId = typeof ROADMAP_IDS[number]

export interface RoadmapEntry {
  id: RoadmapId
  date: string
  icon: JSX.Element
  plotPosition: string
  goalsPosition: string
}

export const roadmapStructure: RoadmapEntry[] = [
  { id: 'first-code',          date: '2011', icon: <BoyIcon fontSize="large"/>,                plotPosition: '-240px', goalsPosition: '100px' },
  { id: 'first-website',       date: '2013', icon: <SchoolIcon fontSize="large"/>,             plotPosition: '-220px', goalsPosition: '100px' },
  { id: 'first-web-app',       date: '2015', icon: <WorkspacePremiumIcon fontSize="large"/>,   plotPosition: '-240px', goalsPosition: '100px' },
  { id: 'first-job',           date: '2016', icon: <WorkIcon fontSize="large"/>,               plotPosition: '-260px', goalsPosition: '100px' },
  { id: 'asana-plugin',        date: '2017', icon: <WorkIcon fontSize="large"/>,               plotPosition: '-200px', goalsPosition: '100px' },
  { id: 'product-company',     date: '2017', icon: <WorkHistoryIcon fontSize="large"/>,        plotPosition: '-245px', goalsPosition: '100px' },
  { id: 'moscow-startup',      date: '2018', icon: <LocationCityIcon fontSize="large"/>,       plotPosition: '-280px', goalsPosition: '100px' },
  { id: 'edtech-apps',         date: '2019', icon: <LocationCityIcon fontSize="large"/>,       plotPosition: '-280px', goalsPosition: '100px' },
  { id: 'covid-marketplace',   date: '2020', icon: <HomeWorkIcon fontSize="large"/>,           plotPosition: '-220px', goalsPosition: '100px' },
  { id: 'israel-freelance',    date: '2020', icon: <CoronavirusIcon fontSize="large"/>,        plotPosition: '-273px', goalsPosition: '100px' },
  { id: 'mentoring',           date: '2021', icon: <GroupsIcon fontSize="large"/>,             plotPosition: '-273px', goalsPosition: '100px' },
  { id: 'back-to-russia',      date: '2021', icon: <PsychologyIcon fontSize="large"/>,         plotPosition: '-240px', goalsPosition: '100px' },
  { id: 'crypto-switch',       date: '2022', icon: <CurrencyBitcoin fontSize="large"/>,        plotPosition: '-280px', goalsPosition: '100px' },
  { id: 'israeli-citizenship', date: '2022', icon: <SurfingIcon fontSize="large"/>,            plotPosition: '-280px', goalsPosition: '100px' },
  { id: 'play-to-earn',        date: '2023', icon: <VideogameAssetIcon fontSize="large"/>,     plotPosition: '-280px', goalsPosition: '100px' },
  { id: 'trading-system',      date: '2023', icon: <ShowChartIcon fontSize="large"/>,          plotPosition: '-280px', goalsPosition: '100px' },
  { id: 'monorepo-dnd',        date: '2024', icon: <CastleIcon fontSize="large"/>,             plotPosition: '-250px', goalsPosition: '100px' },
  { id: 'ton-company',         date: '2024', icon: <AcUnitIcon fontSize="large"/>,             plotPosition: '-250px', goalsPosition: '80px'  },
]
