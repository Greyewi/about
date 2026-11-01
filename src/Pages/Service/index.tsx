import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Wrapper } from '../../styles'
import { Article, BackLink, Title, Lead, SectionTitle, List, Question, Answer, Cta, Cards, Card, Reviews } from './styles'
import { useTranslation } from '../../i18n/useTranslation'
import type { ServiceId } from '../../i18n/types'
import Contact from '../../Components/Contact'
import { SITE_URL, PROFI_URL, jsonLd, localePath } from '../../seo'
import { SERVICE_PATHS, SERVICE_PARENT, childrenOf } from '../../serviceTree'

interface Props {
    id: ServiceId
}

function Service({ id }: Props) {
    const { services, ui } = useTranslation()
    const { locale, defaultLocale } = useRouter()
    const page = services[id]
    const parent = SERVICE_PARENT[id]
    const subpages = childrenOf(id)

    const absoluteUrl = (path: string) => SITE_URL ? `${SITE_URL}${localePath(path, locale ?? 'en', defaultLocale ?? 'en')}` : undefined
    const pageUrl = absoluteUrl(SERVICE_PATHS[id])
    const crumbs = [
        { name: ui.service.hubTitle, path: '/services' },
        ...(parent ? [{ name: services[parent].name, path: SERVICE_PATHS[parent] }] : []),
        { name: page.name, path: SERVICE_PATHS[id] },
    ]
    const structuredData = [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: page.name,
            description: page.lead,
            serviceType: page.name,
            areaServed: 'Worldwide',
            availableLanguage: locale === 'ru' ? ['ru', 'en'] : ['en'],
            ...(pageUrl && { url: pageUrl }),
            provider: { '@type': 'Person', name: ui.personName },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: page.faq.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
            })),
        },
        // Breadcrumbs need absolute URLs, so they are only emitted when SITE_URL is set.
        ...(SITE_URL ? [{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs.map((crumb, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: crumb.name,
                item: absoluteUrl(crumb.path),
            })),
        }] : []),
    ]

    return (
        <Wrapper>
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
            </Head>
            <Article>
                {parent
                    ? <BackLink as={Link} href={SERVICE_PATHS[parent]}>← {services[parent].name}</BackLink>
                    : <BackLink as={Link} href="/services">← {ui.service.back}</BackLink>}
                <Title>{page.h1}</Title>
                <Lead>{page.lead}</Lead>
                <Reviews>{ui.service.reviews} <a href={PROFI_URL} target="_blank" rel="noopener noreferrer">Profi.ru</a>.</Reviews>
                {page.sections.map(section => (
                    <section key={section.title}>
                        <SectionTitle>{section.title}</SectionTitle>
                        <List>
                            {section.items.map(item => <li key={item}>{item}</li>)}
                        </List>
                    </section>
                ))}
                {subpages.length > 0 && (
                    <section>
                        <SectionTitle>{ui.service.subpagesTitle}</SectionTitle>
                        <Cards>
                            {subpages.map(child => (
                                <Card as={Link} key={child} href={SERVICE_PATHS[child]}>
                                    <SectionTitle>{services[child].name}</SectionTitle>
                                    <p>{services[child].summary}</p>
                                    <span>{ui.service.more} →</span>
                                </Card>
                            ))}
                        </Cards>
                    </section>
                )}
                <section>
                    <SectionTitle>{ui.service.faqTitle}</SectionTitle>
                    {page.faq.map(({ q, a }) => (
                        <div key={q}>
                            <Question>{q}</Question>
                            <Answer>{a}</Answer>
                        </div>
                    ))}
                </section>
                <Cta>
                    <SectionTitle>{page.ctaTitle}</SectionTitle>
                    <div>{page.ctaText}</div>
                    <Contact />
                </Cta>
            </Article>
        </Wrapper>
    )
}

export default Service
