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
                        <Typography>┬─┬﻿ ノ( ゜-゜ノ)</Typography>
                        <div>Sergey Suntsev</div>
                    </Logo>
                </H2>
                <NavBar>
                    <Link to="/"><Typography>Main</Typography></Link>
                    <Link to="/cv"><Typography>CV</Typography></Link>
                    <Link to="/links"><Typography>Links</Typography></Link>
                </NavBar>
            </WrapperInline>
        </HeaderElement>
    );
}

export default Header;