import React from 'react'
import Link from 'next/link'
import { Wrapper } from '../../styles'
import { Article, Title, Lead, SectionTitle, Cards, Card } from '../Service/styles'
import { useTranslation } from '../../i18n/useTranslation'
import type { ServiceId } from '../../i18n/types'
import Contact from '../../Components/Contact'

// Services grouped by audience: people learning or growing in tech, and businesses.
const GROUPS: { title: 'groupPeople' | 'groupBusiness'; ids: ServiceId[] }[] = [
    { title: 'groupPeople', ids: ['mentoring', 'qa', 'ai'] },
    { title: 'groupBusiness', ids: ['business'] },
]

function Services() {
    const { services, ui } = useTranslation()
    return (
        <Wrapper>
            <Article>
                <Title>{ui.service.hubTitle}</Title>
                <Lead>{ui.service.hubLead}</Lead>
                {GROUPS.map(group => (
                    <React.Fragment key={group.title}>
                        <SectionTitle>{ui.service[group.title]}</SectionTitle>
                        <Cards>
                            {group.ids.map(id => (
                                <Card as={Link} key={id} href={`/services/${id}`}>
                                    <SectionTitle as="h3">{services[id].name}</SectionTitle>
                                    <p>{services[id].summary}</p>
                                    <span>{ui.service.more} →</span>
                                </Card>
                            ))}
                        </Cards>
                    </React.Fragment>
                ))}
                <Contact />
            </Article>
        </Wrapper>
    )
}

export default Services
