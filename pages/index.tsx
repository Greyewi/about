import type { GetServerSideProps } from 'next'
import Main from '../src/Pages/Main'
import { dictionaries } from '../src/i18n'
import type { Locale } from '../src/i18n/types'

interface Props {
    introIndex: number
}

export default function IndexPage({ introIndex }: Props) {
    return <Main introIndex={introIndex} />
}

// Pick the intro line on the server so it is already in the HTML and the
// client hydrates with the same line (no empty flash, no mismatch).
export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => {
    const { intro } = (dictionaries[locale as Locale] ?? dictionaries.en).main
    return { props: { introIndex: Math.floor(Math.random() * intro.length) } }
}
