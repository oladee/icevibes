'use client'
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Fun from "./components/Fun";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Ready from "./components/Ready";
import { AccordionProvider } from "./context/accordion";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Fun/>
      <Location/>
      <Ready/>
      <AccordionProvider>
      <Faq/>
      </AccordionProvider>
      <Footer/>
    </div>
  );
}
