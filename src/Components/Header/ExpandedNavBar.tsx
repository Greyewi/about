import React, {FC, ReactNode, useState} from "react";
import {Line, NavBar, ExpandedBtn, ExpandedArea} from './styles'

interface Props {
  children: ReactNode[]
}

const ExpandedNavBar: FC<Props> = ({children}) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <NavBar>
      <ExpandedBtn onClick={() => setExpanded(prev => !prev)}>
        <Line/>
        <Line/>
        <Line/>
      </ExpandedBtn>
      <ExpandedArea expanded={expanded} onClick={() => setExpanded(prev => !prev)}>
        {children}
      </ExpandedArea>
      {children}
    </NavBar>
  );
}

export default ExpandedNavBar;