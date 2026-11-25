import type { GetStaticPaths, GetStaticProps } from 'next'
import Article from '../../src/Pages/Article'
import { ARTICLES, ARTICLE_IDS, articleBySlug, articleLocales } from '../../src/articles'
import { dictionaries } from '../../src/i18n'
import type { ArticleId, Locale } from '../../src/i18n/types'
import type { PageSeo } from '../../src/seo'

interface Props {
    id: ArticleId
    seo: PageSeo
}

export default function ArticlePage({ id }: Props) {
    return <Article id={id} />
}

// One path per locale the article is written in; any other URL is a 404.
export const getStaticPaths: GetStaticPaths = async () => ({
    paths: ARTICLE_IDS.flatMap(id => articleLocales(id).map(locale => ({ params: { slug: ARTICLES[id].slug }, locale }))),
    fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params, locale }) => {
    const id = articleBySlug(String(params?.slug))
    const text = id && dictionaries[locale as Locale]?.articles[id]
    if (!id || !text) return { notFound: true }
    return {
        props: {
            id,
            seo: { title: text.title, description: text.description, locales: articleLocales(id), ogType: 'article' },
        },
    }
}
