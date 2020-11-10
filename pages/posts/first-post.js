import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
        <Layout>
        <Head>
            <title>First post</title>
        </Head>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Layout>
    )
}