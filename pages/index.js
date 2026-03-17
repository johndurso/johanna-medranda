import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Clips from '../components/Clips';
import Affiliations from '../components/Affiliations';
import Events from '../components/Events';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Johanna Medranda — Detroit-based Stand-up Comedian</title>
        <meta name="description" content="Johanna Medranda is a Detroit-based stand-up comedian performing across the country." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Clips />
        <Affiliations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}