import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A chocolate</p>
        <p>
          This is a sample website trying out nextJs - you can find some more at my{' '}
          <a href="https://github.com/pradeepa45">GitHub</a> {' '} page.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <div className={utilStyles.blogDiv}> 
              <h3 className={utilStyles.blogTitle}><a href={`/posts/${id}`}>{title}</a></h3>
              <br />
              {/* {id}
              <br /> */}
                <Date dateString={date}/>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}