import React, { useEffect } from "react";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import About from "../components/About";
import HomePagdData from "../data/HomePagdData.json";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  const { hero, socialBtns, about, projects, experience, contact } =
    HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <About data={about} />
      <Projects data={projects} />
      <Experience data={experience} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
