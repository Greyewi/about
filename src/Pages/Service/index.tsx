import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Wrapper } from '../../styles'
import { Article, BackLink, Title, Lead, SectionTitle, List, Question, Answer, Cta } from './styles'
import { useTranslation } from '../../i18n/useTranslation'
import type { ServiceId } from '../../i18n/types'
import Contact from '../../Components/Contact'
import { SITE_URL, jsonLd, localePath } from '../../seo'

interface Props {
    id: ServiceId
}

function Service({ id }: Props) {
    const { services, ui } = useTranslation()
    const { locale, defaultLocale } = useRouter()
    const page = services[id]

    const pageUrl = SITE_URL ? `${SITE_URL}${localePath(`/services/${id}`, locale ?? 'en', defaultLocale ?? 'en')}` : undefined
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
    ]

    return (
        <Wrapper>
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
            </Head>
            <Article>
                <BackLink as={Link} href="/services">← {ui.service.back}</BackLink>
                <Title>{page.h1}</Title>
                <Lead>{page.lead}</Lead>
                {page.sections.map(section => (
                    <section key={section.title}>
                        <SectionTitle>{section.title}</SectionTitle>
                        <List>
                            {section.items.map(item => <li key={item}>{item}</li>)}
                        </List>
                    </section>
                ))}
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
