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
import MentorLogo from '../shared/img/attachment_71573833.jpeg'
import MerlionLogo from '../shared/img/snffkw4xywiybmpsopun.webp'
import CodabraLogo from '../shared/img/07f127a9-5aa3-4e59-baf2-fed12e1b8953_thumb.png'
import InitGroupLogo from '../shared/img/podkl_6.png'
import CkDigitalLogo from '../shared/img/medium_37e3e54613a14bf780935b3b7ad1a5b6.png'
import PspuLogo from '../shared/img/PSPU.webp'
import PlayToEarnLogo from '../shared/img/playToEarn.jpeg'
import TonstakersLogo from '../shared/img/Tonstakers.png'
import type { StaticImageData } from 'next/image'

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

export const SKILL_IDS = [
  'js', 'react', 'state-managers', 'styles', 'typescript', 'nodejs',
  'system-design', 'qa', 'databases', 'architecture', 'devops', 'english',
] as const

export type SkillId = typeof SKILL_IDS[number]

export const JOB_IDS = [
  'tonstakers', 'play-to-earn', 'mentor', 'merlion',
  'codabra', 'initgroup', 'ckdigital', 'pspu',
] as const

export type JobId = typeof JOB_IDS[number]

export interface JobEntry {
  id: JobId
  date: string
  logo: string | StaticImageData
  companyUrl?: string
}

export const numberOfYears = (start: string): number =>
  Math.round((new Date().getTime() - new Date(start).getTime()) / (1000 * 60 * 60 * 24 * 365))

export const cvStructure = {
  person: {
    phone: '+972(536)29-40-60 (IL)',
    email: 'greyewi@gmail.com',
    tg: 'greyewi',
    linkedin: 'greyewi',
    height: 140,
  },
  educationHeight: 91,
  skills: [
    { id: 'js', strength: 90 },
    { id: 'react', strength: 90 },
    { id: 'state-managers', strength: 95 },
    { id: 'styles', strength: 70 },
    { id: 'typescript', strength: 85 },
    { id: 'nodejs', strength: 75 },
    { id: 'system-design', strength: 85 },
    { id: 'qa', strength: 70 },
    { id: 'databases', strength: 70 },
    { id: 'architecture', strength: 50 },
    { id: 'devops', strength: 60 },
    { id: 'english', strength: 80 },
  ] satisfies { id: SkillId; strength: number }[],
  skillsHeight(): number {
    return this.skills.length * 55
  },
  experience: [
    { id: 'tonstakers',   date: '2024 - ',    logo: TonstakersLogo, companyUrl: 'https://tonstakers.com' },
    { id: 'play-to-earn', date: '2022 - 2024', logo: PlayToEarnLogo },
    { id: 'mentor',       date: '2020 - 2022', logo: MentorLogo },
    { id: 'merlion',      date: '2020',        logo: MerlionLogo, companyUrl: 'https://merlion.com/eng/about/' },
    { id: 'codabra',      date: '2018 - 2020', logo: CodabraLogo, companyUrl: 'https://codabra.org' },
    { id: 'initgroup',    date: '2017 - 2018', logo: InitGroupLogo, companyUrl: 'https://initpro.ru/kassa' },
    { id: 'ckdigital',    date: '2016 - 2017', logo: CkDigitalLogo },
    { id: 'pspu',         date: '2013 - 2016', logo: PspuLogo },
  ] satisfies JobEntry[],
}
