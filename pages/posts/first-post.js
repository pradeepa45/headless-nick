import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <div>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>This is from first post</h1>
            <Link href='/'>Go back to home</Link>
        </div>
        </Layout>
    )
}