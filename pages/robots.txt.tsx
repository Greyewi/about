import type { GetServerSideProps } from 'next'
import { baseUrlFromRequest } from '../src/seo'

export default function Robots() {
    return null
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.write(`User-agent: *
Allow: /
Disallow: /mind-map

Sitemap: ${baseUrlFromRequest(req)}/sitemap.xml
`)
    res.end()
    return { props: {} }
}
