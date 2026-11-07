import React, {FC, ReactNode, useState} from "react";
import {Line, NavBar, ExpandedBtn, ExpandedArea} from './styles'
import { useTranslation } from "../../i18n/useTranslation";

interface Props {
  children: ReactNode[]
  // Rendered between the links and the burger: on mobile (links hidden) it
  // sits just left of the burger, and the DOM order matches the visual one.
  actions?: ReactNode
}

const ExpandedNavBar: FC<Props> = ({children, actions}) => {
  const [expanded, setExpanded] = useState(false)
  const { ui } = useTranslation()
  return (
    <>
      <NavBar>
        {children}
      </NavBar>
      {actions}
      <ExpandedBtn
        type="button"
        $expanded={expanded}
        aria-label={expanded ? ui.menu.close : ui.menu.open}
        aria-expanded={expanded}
        aria-controls="mobile-menu"
        onClick={() => setExpanded(prev => !prev)}
      >
        <Line/>
        <Line/>
        <Line/>
      </ExpandedBtn>
      <ExpandedArea id="mobile-menu" $expanded={expanded} onClick={() => setExpanded(false)}>
        {children}
      </ExpandedArea>
    </>
  );
}

export default ExpandedNavBar;
