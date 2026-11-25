import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Wrapper } from '../../styles'
import { Article as ArticleBox, BackLink, Title, Lead, SectionTitle, List, Question, Answer, Cta, Cards, Card } from '../Service/styles'
import { Byline, Paragraph, Steps, InlineCode, TextLink, CodeBlock, TableScroll, Table } from './styles'
import { useTranslation } from '../../i18n/useTranslation'
import type { ArticleBlock, ArticleId } from '../../i18n/types'
import Contact from '../../Components/Contact'
import { SITE_URL, SAME_AS, jsonLd, localePath } from '../../seo'
import { SERVICE_PATHS, SERVICE_PARENT } from '../../serviceTree'
import { ARTICLES, articlePath } from '../../articles'

interface Props {
    id: ArticleId
}

// Article strings may contain `code` spans and [text](url) links. A url that
// starts with "/" is a page of this site and keeps the current locale.
const INLINE = /(`[^`]+`|\[[^\]]+\]\([^)]+\))/g

const inline = (text: string): React.ReactNode =>
    text.split(INLINE).map((part, i) => {
        if (part.startsWith('`')) return <InlineCode key={i}>{part.slice(1, -1)}</InlineCode>
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (!link) return part
        const [, label, href] = link
        return href.startsWith('/')
            ? <TextLink as={Link} key={i} href={href}>{label}</TextLink>
            : <TextLink key={i} href={href} target="_blank" rel="noopener noreferrer">{label}</TextLink>
    })

const renderBlock = (block: ArticleBlock, key: number): React.ReactNode => {
    if ('p' in block) return <Paragraph key={key}>{inline(block.p)}</Paragraph>
    if ('list' in block) return <List key={key}>{block.list.map(item => <li key={item}>{inline(item)}</li>)}</List>
    if ('steps' in block) return <Steps key={key}>{block.steps.map(item => <li key={item}>{inline(item)}</li>)}</Steps>
    if ('code' in block) return <CodeBlock key={key}><code>{block.code}</code></CodeBlock>
    return (
        <TableScroll key={key}>
            <Table>
                <thead>
                    <tr>{block.table.head.map(cell => <th key={cell} scope="col">{cell}</th>)}</tr>
                </thead>
                <tbody>
                    {block.table.rows.map(row => (
                        <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{inline(cell)}</td>)}</tr>
                    ))}
                </tbody>
            </Table>
        </TableScroll>
    )
}

function Article({ id }: Props) {
    const { articles, services, ui } = useTranslation()
    const { locale, defaultLocale } = useRouter()
    const page = articles[id]
    if (!page) return null

    const meta = ARTICLES[id]
    const service = meta.service
    const parent = SERVICE_PARENT[service]

    const absoluteUrl = (path: string) => SITE_URL ? `${SITE_URL}${localePath(path, locale ?? 'en', defaultLocale ?? 'en')}` : undefined
    const pageUrl = absoluteUrl(articlePath(id))
    const author = {
        '@type': 'Person',
        name: ui.personName,
        jobTitle: ui.article.authorRole,
        sameAs: SAME_AS,
        ...(SITE_URL && { url: absoluteUrl('/cv') }),
    }
    const crumbs = [
        { name: ui.service.hubTitle, path: '/services' },
        ...(parent ? [{ name: services[parent].name, path: SERVICE_PATHS[parent] }] : []),
        { name: services[service].name, path: SERVICE_PATHS[service] },
        { name: page.h1, path: articlePath(id) },
    ]
    const structuredData = [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: page.h1,
            description: page.lead,
            inLanguage: locale ?? 'en',
            datePublished: meta.published,
            dateModified: meta.updated,
            author,
            publisher: author,
            ...(pageUrl && { mainEntityOfPage: pageUrl, image: `${SITE_URL}/og-image.jpg` }),
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
    const updated = new Date(meta.updated).toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

    return (
        <Wrapper>
            <Head>
                <meta property="article:published_time" content={meta.published} />
                <meta property="article:modified_time" content={meta.updated} />
                <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
            </Head>
            <ArticleBox>
                <BackLink as={Link} href={SERVICE_PATHS[service]}>← {services[service].name}</BackLink>
                <Title>{page.h1}</Title>
                <Byline>
                    <Link href="/cv">{ui.personName}</Link>, {ui.article.authorRole} · {ui.article.updated} <time dateTime={meta.updated}>{updated}</time>
                </Byline>
                <Lead>{page.lead}</Lead>
                {page.sections.map(section => (
                    <section key={section.title}>
                        <SectionTitle>{section.title}</SectionTitle>
                        {section.blocks.map(renderBlock)}
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
                <section>
                    <SectionTitle>{ui.article.relatedService}</SectionTitle>
                    <Cards>
                        <Card as={Link} href={SERVICE_PATHS[service]}>
                            <SectionTitle as="h3">{services[service].name}</SectionTitle>
                            <p>{services[service].summary}</p>
                            <span>{ui.service.more} →</span>
                        </Card>
                    </Cards>
                </section>
                <Cta>
                    <SectionTitle>{page.ctaTitle}</SectionTitle>
                    <div>{page.ctaText}</div>
                    <Contact />
                </Cta>
            </ArticleBox>
        </Wrapper>
    )
}

export default Article
