import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h2>Why I Chose My IT Specialization</h2>

        <p>
          I chose Data Analytics as my IT specialization because I am interested
          in how data can be used to solve real-world problems and help people
          make better decisions. Many businesses and organizations collect large
          amounts of data every day, but that data becomes useful only when it is
          properly analyzed and understood.
        </p>

        <p>
          One of the industry trends that made me interested in Data Analytics is
          the growing use of data-driven decision making. Companies use data to
          understand customer behavior, improve services, identify problems,
          predict trends, and make better business decisions.
        </p>

        <p>
          I also enjoy working with technology, numbers, and problem solving.
          Data Analytics allows me to use tools such as Python, databases,
          spreadsheets, and data visualization to discover patterns and turn raw
          data into useful information.
        </p>

        <p>
          In the future, I see myself working as a data analyst and continuing to
          improve my skills in data visualization, databases, and machine learning.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}