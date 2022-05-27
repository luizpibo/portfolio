import About from "../src/pages/home/About";
import Experiences from "../src/pages/home/Experiences";
import Header from "../src/pages/home/Header";
import Projects from "../src/pages/home/Projects";
import Footer from "../src/pages/home/Footer";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Head from "next/head";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Luiz Fernando</title>
        <meta
          name="description"
          content="Olá me chamo luiz fernando e sou desenvolvedor fullstack node.js!"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="Luiz Fernando" />
        <meta
          name="keywords"
          content="Desenvolvimento de software, programação, front-end "
        />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="luizpibo.vercel.app" />
        <meta property="og:title" content="Olá" />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/media/FC0uUBmXsAMHpSD?format=jpg&name=medium"
        />
        <meta
          property="og:description"
          content="Olá me chamo luiz fernando e sou desenvolvedor fullstack node.js!"
        />

        <meta property="article:author" content="Luiz Fernando" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@darkMarciano" />
        <meta name="twitter:title" content="Olá" />
        <meta name="twitter:creator" content="@darkMarciano" />
        <meta
          name="twitter:description"
          content="Olá me chamo luiz fernando e sou desenvolvedor fullstack node.js!"
        />
      </Head>
      <Header />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </>
  );
}
