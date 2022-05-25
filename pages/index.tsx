import About from "../src/pages/home/About";
import Experiences from "../src/pages/home/Experiences";
import Header from "../src/pages/home/Header";
import Projects from "../src/pages/home/Projects";
import Footer from "../src/pages/home/Footer";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Header />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </>
  );
}
