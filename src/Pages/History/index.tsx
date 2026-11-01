import styled from 'styled-components'
import RoadMap from '../../Components/RoadMap'
import { useTranslation } from '../../i18n/useTranslation'

// Readable by search engines and screen readers, invisible on screen,
// so the timeline layout stays as it is.
const HiddenHeading = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`

const History = () => {
    const { ui } = useTranslation()
    return (
        <>
            <HiddenHeading>{ui.historyHeading}</HiddenHeading>
            <RoadMap/>
        </>
    )
}

export default History
