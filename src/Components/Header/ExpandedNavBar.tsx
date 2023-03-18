import React, {FC} from "react";
import {Line, NavBar, ExpandedBtn} from './styles'
import {H2, Typography, WrapperInline} from "../../styles";
import {Link} from 'react-router-dom'

interface Props {
  links: string[]
}

const ExpandedNavBar: FC<Props> = ({links}) => {
  return (
    <NavBar>
      <ExpandedBtn>
        <Line/>
        <Line/>
        <Line/>
      </ExpandedBtn>
      {/*<Link to="/"><Typography>Main</Typography></Link>*/}
      {/*<Link to="/history"><Typography>Story</Typography></Link>*/}
      {/*<Link to="/cv"><Typography>CV</Typography></Link>*/}
      {/*<Link to="/mind-map"><Typography>Mind map</Typography></Link>*/}
    </NavBar>
  );
}

export default ExpandedNavBar;