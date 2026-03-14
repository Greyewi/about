import React from "react";
import {HeaderElement, Logo} from './styles'
import {H2, Typography, WrapperInline} from "../../styles";
import Link from 'next/link'
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
                    <Link href="/"><Typography>Main</Typography></Link>
                    <Link href="/history"><Typography>Story</Typography></Link>
                    <Link href="/cv"><Typography>CV</Typography></Link>
                    {/*<Link href="/mind-map"><Typography>Mind map</Typography></Link>*/}
                </ExpandedNavBar>
            </WrapperInline>
        </HeaderElement>
    );
}

export default Header;