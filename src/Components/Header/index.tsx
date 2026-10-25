import React from "react";
import {HeaderElement, Logo, Table} from './styles'
import {H2, Typography, WrapperInline} from "../../styles";
import Link from 'next/link'
import ExpandedNavBar from "./ExpandedNavBar";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTranslation } from "../../i18n/useTranslation";

function Header() {
    const { ui } = useTranslation()
    return (
        <HeaderElement>
            <WrapperInline>
                <H2>
                    <Logo>
                        <Typography><Table>┬─┬</Table> ノ( ゜-゜ノ)</Typography>
                        <div>Greyewi</div>
                    </Logo>
                </H2>
                <ExpandedNavBar>
                    <Link href="/"><Typography>{ui.nav.main}</Typography></Link>
                    <Link href="/services"><Typography>{ui.nav.services}</Typography></Link>
                    <Link href="/history"><Typography>{ui.nav.story}</Typography></Link>
                    <Link href="/cv"><Typography>{ui.nav.cv}</Typography></Link>
                    {/*<Link href="/mind-map"><Typography>Mind map</Typography></Link>*/}
                </ExpandedNavBar>
                <LocaleSwitcher />
            </WrapperInline>
        </HeaderElement>
    );
}

export default Header;
