import React from "react";
import {HeaderElement, Logo} from './styles'
import {H2, Typography, WrapperInline} from "../../styles";
import {Link} from 'react-router-dom'
import ExpandedNavBar from "./ExpandedNavBar";

function Header() {
    return (
        <HeaderElement>
            <WrapperInline>
                <H2>
                    <Logo>
                        <Typography>┬─┬ ノ( ゜-゜ノ)</Typography>
                        <div>Greyewi</div>
                    </Logo>
                </H2>
                <ExpandedNavBar>
                    <Link to="/"><Typography>Main</Typography></Link>
                    <Link to="/history"><Typography>Story</Typography></Link>
                    <Link to="/cv"><Typography>CV</Typography></Link>
                    {/*<Link to="/mind-map"><Typography>Mind map</Typography></Link>*/}
                </ExpandedNavBar>
            </WrapperInline>
        </HeaderElement>
    );
}

export default Header;