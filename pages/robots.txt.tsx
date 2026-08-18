import type { GetServerSideProps } from 'next'

// No React output — this route only exists to write a text/plain response.
// Kept as a Pages Router page (not a public/ static file) so the Sitemap:
// line can be built from the same NEXT_PUBLIC_SITE_URL as canonical/hreflang
// in pages/_app.tsx, instead of hardcoding the domain in a second place.
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '')

  const lines = ['User-agent: *', 'Allow: /']
  if (siteUrl) {
    lines.push('', `Sitemap: ${siteUrl}/sitemap.xml`)
  }

  res.setHeader('Content-Type', 'text/plain')
  res.write(lines.join('\n') + '\n')
  res.end()

  return { props: {} }
}

export default function RobotsTxt() {
  return null
}
