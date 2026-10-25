import React from 'react'
import Link from 'next/link'
import { Wrapper } from '../../styles'
import { Article, Title, Lead, SectionTitle, Cards, Card } from '../Service/styles'
import { useTranslation } from '../../i18n/useTranslation'
import type { ServiceId } from '../../i18n/types'
import Contact from '../../Components/Contact'

const SERVICE_IDS: ServiceId[] = ['mentoring', 'qa', 'ai']

function Services() {
    const { services, ui } = useTranslation()
    return (
        <Wrapper>
            <Article>
                <Title>{ui.service.hubTitle}</Title>
                <Lead>{ui.service.hubLead}</Lead>
                <Cards>
                    {SERVICE_IDS.map(id => (
                        <Card as={Link} key={id} href={`/services/${id}`}>
                            <SectionTitle>{services[id].name}</SectionTitle>
                            <p>{services[id].summary}</p>
                            <span>{ui.service.more} →</span>
                        </Card>
                    ))}
                </Cards>
                <Contact />
            </Article>
        </Wrapper>
    )
}

export default Services
