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
        <p>
          Hi! I'm Edward Andrei Suva. I enjoy playing video games, listening to music, and spending time at cafes.
          One of my favorite things to do is explore new cafes and try different kinds of coffee.
        </p>

        <p>
        I enjoy listening to different types of music and discovering new places to eat.
         I also really enjoy coffee, especially when I get to experience it at a new cafe.
        </p>

        <p>
        In five years, I see myself working as a data analyst while continuing to explore new cafes, discover new places, and enjoy good coffee along the way.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on our
          Next.js tutorial.)
        </p>
      </section>
    </Layout>
  );
}