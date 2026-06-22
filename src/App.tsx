import Loader from "./components/Loader";
import CurrentRail from "./components/CurrentRail";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import AiStudio from "./components/AiStudio";
import Services from "./components/Services";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import WhyApex from "./components/WhyApex";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <Loader />
      <CurrentRail />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <AiStudio />
        <Services />
        <Process />
        <WhyApex />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
