import React from "react";
import {HeaderElement, NavBar, Logo} from './styles'
import {H2, Typography, WrapperInline} from "../../styles";
import {Link} from 'react-router-dom'

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
                <NavBar>
                    <Link to="/"><Typography>Main</Typography></Link>
                    <Link to="/history"><Typography>Story</Typography></Link>
                    <Link to="/cv"><Typography>CV</Typography></Link>
                </NavBar>
            </WrapperInline>
        </HeaderElement>
    );
}

export default Header