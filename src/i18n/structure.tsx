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
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import SmartToyIcon from "@mui/icons-material/SmartToy"
import MentorLogo from '../shared/img/mentor.png'
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
  'my-odyssey',
  'ai-mentoring',
] as const

export type RoadmapId = typeof ROADMAP_IDS[number]

export interface RoadmapEntry {
  id: RoadmapId
  date: string
  icon: JSX.Element
  plotPosition: string
  goalsPosition: string
}

// Keyed by RoadmapId rather than a plain array: a duplicate id is TS1117,
// a missing id is a Record error, and an id that doesn't appear in
// ROADMAP_IDS is an excess-property error. roadmapStructure is then
// derived from ROADMAP_IDS itself, so the array's runtime order always
// matches the id tuple's declared order (the timeline's chronology).
const roadmapEntries: Record<RoadmapId, Omit<RoadmapEntry, 'id'>> = {
  'first-code':          { date: '2011', icon: <BoyIcon fontSize="large"/>,                plotPosition: '-240px', goalsPosition: '100px' },
  'first-website':       { date: '2013', icon: <SchoolIcon fontSize="large"/>,             plotPosition: '-220px', goalsPosition: '100px' },
  'first-web-app':       { date: '2015', icon: <WorkspacePremiumIcon fontSize="large"/>,   plotPosition: '-240px', goalsPosition: '100px' },
  'first-job':           { date: '2016', icon: <WorkIcon fontSize="large"/>,               plotPosition: '-260px', goalsPosition: '100px' },
  'asana-plugin':        { date: '2017', icon: <WorkIcon fontSize="large"/>,               plotPosition: '-200px', goalsPosition: '100px' },
  'product-company':     { date: '2017', icon: <WorkHistoryIcon fontSize="large"/>,        plotPosition: '-245px', goalsPosition: '100px' },
  'moscow-startup':      { date: '2018', icon: <LocationCityIcon fontSize="large"/>,       plotPosition: '-280px', goalsPosition: '100px' },
  'edtech-apps':         { date: '2019', icon: <LocationCityIcon fontSize="large"/>,       plotPosition: '-280px', goalsPosition: '100px' },
  'covid-marketplace':   { date: '2020', icon: <HomeWorkIcon fontSize="large"/>,           plotPosition: '-220px', goalsPosition: '100px' },
  'israel-freelance':    { date: '2020', icon: <CoronavirusIcon fontSize="large"/>,        plotPosition: '-273px', goalsPosition: '100px' },
  'mentoring':           { date: '2021', icon: <GroupsIcon fontSize="large"/>,             plotPosition: '-273px', goalsPosition: '100px' },
  'back-to-russia':      { date: '2021', icon: <PsychologyIcon fontSize="large"/>,         plotPosition: '-240px', goalsPosition: '100px' },
  'crypto-switch':       { date: '2022', icon: <CurrencyBitcoin fontSize="large"/>,        plotPosition: '-280px', goalsPosition: '100px' },
  'israeli-citizenship': { date: '2022', icon: <SurfingIcon fontSize="large"/>,            plotPosition: '-280px', goalsPosition: '100px' },
  'play-to-earn':        { date: '2023', icon: <VideogameAssetIcon fontSize="large"/>,     plotPosition: '-280px', goalsPosition: '100px' },
  'trading-system':      { date: '2023', icon: <ShowChartIcon fontSize="large"/>,          plotPosition: '-280px', goalsPosition: '100px' },
  'monorepo-dnd':        { date: '2024', icon: <CastleIcon fontSize="large"/>,             plotPosition: '-250px', goalsPosition: '100px' },
  'ton-company':         { date: '2024', icon: <AcUnitIcon fontSize="large"/>,             plotPosition: '-250px', goalsPosition: '80px'  },
  'my-odyssey':          { date: '2025', icon: <LightbulbIcon fontSize="large"/>,          plotPosition: '-250px', goalsPosition: '75px'  },
  'ai-mentoring':        { date: '2025', icon: <SmartToyIcon fontSize="large"/>,           plotPosition: '-210px', goalsPosition: '75px'  },
}

export const roadmapStructure: RoadmapEntry[] = ROADMAP_IDS.map(id => ({ id, ...roadmapEntries[id] }))

export const SKILL_IDS = [
  'js', 'react', 'state-managers', 'styles', 'typescript', 'nodejs',
  'system-design', 'qa', 'databases', 'architecture', 'devops', 'english',
] as const

export type SkillId = typeof SKILL_IDS[number]

export const JOB_IDS = [
  'tonstakers', 'mentor', 'play-to-earn', 'merlion',
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

export interface SkillEntry {
  id: SkillId
  strength: number
}

// Same guarantee as roadmapEntries above: Record<SkillId, …> makes a
// duplicate id TS1117, a missing id a Record error, and an id outside
// SKILL_IDS an excess-property error. cvSkills is derived from SKILL_IDS
// so its runtime order matches the tuple's declared order.
const skillEntries: Record<SkillId, Omit<SkillEntry, 'id'>> = {
  'js':             { strength: 90 },
  'react':          { strength: 90 },
  'state-managers': { strength: 95 },
  'styles':         { strength: 70 },
  'typescript':     { strength: 85 },
  'nodejs':         { strength: 75 },
  'system-design':  { strength: 85 },
  'qa':             { strength: 70 },
  'databases':      { strength: 70 },
  'architecture':   { strength: 50 },
  'devops':         { strength: 60 },
  'english':        { strength: 80 },
}

// Hoisted to a top-level const (rather than living only inside
// cvStructure) so `skillsHeight` below can be a plain computed value
// instead of a `this`-dependent method — see src/Components/CV/index.tsx,
// which destructures sibling fields off cvStructure in one place and
// calls this one qualified in another; a `this`-bound method is a trap
// for exactly that pattern.
export const cvSkills: SkillEntry[] = SKILL_IDS.map(id => ({ id, ...skillEntries[id] }))

// Same guarantee for the CV's job history.
const jobEntries: Record<JobId, Omit<JobEntry, 'id'>> = {
  'tonstakers':   { date: '2024 - ',     logo: TonstakersLogo, companyUrl: 'https://tonstakers.com' },
  'mentor':       { date: '2020 - ',     logo: MentorLogo },
  'play-to-earn': { date: '2022 - 2024', logo: PlayToEarnLogo },
  'merlion':      { date: '2020',        logo: MerlionLogo, companyUrl: 'https://merlion.com/eng/about/' },
  'codabra':      { date: '2018 - 2020', logo: CodabraLogo, companyUrl: 'https://codabra.org' },
  'initgroup':    { date: '2017 - 2018', logo: InitGroupLogo, companyUrl: 'https://initpro.ru/kassa' },
  'ckdigital':    { date: '2016 - 2017', logo: CkDigitalLogo },
  'pspu':         { date: '2013 - 2016', logo: PspuLogo },
}

export const cvExperience: JobEntry[] = JOB_IDS.map(id => ({ id, ...jobEntries[id] }))

export const cvStructure = {
  person: {
    phone: '+972(536)29-40-60 (IL)',
    email: 'greyewi@gmail.com',
    tg: 'greyewi',
    linkedin: 'greyewi',
    height: 140,
  },
  educationHeight: 91,
  skills: cvSkills,
  skillsHeight: cvSkills.length * 55,
  experience: cvExperience,
}
