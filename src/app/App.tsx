import React from 'react';
import { useApp } from './useApp';
import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Achievements from '../components/Achievements/Achievements';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import BackToTop from '../components/BackToTop/BackToTop';

export default function App() {
  const { loading, completeLoading } = useApp();

  return (
    <>
      {/* 1. Global Loading Intro Animation */}
      <Loader onLoadComplete={completeLoading} />

      {/* Show portfolio content only after loading is completed */}
      {!loading && (
        <div className="relative min-h-screen selection:bg-accentOrange/30 selection:text-white">
          {/* 2. Floating Back To Top button */}
          <BackToTop />

          {/* 3. Sticky Glass Navbar */}
          <Navbar />

          {/* 5. Main Portfolio sections flow */}
          <main className="relative z-10">
            {/* Hero Section with 3D Canvas */}
            <Hero />

            {/* About Profile Info */}
            <About />

            {/* Technical Skills Categorized Grid */}
            <Skills />

            {/* Timeline Internship Details */}
            <Experience />

            {/* Project order: Metro Connect */}
            <Projects />

            {/* Awards & Confetti bursts */}
            <Achievements />

            {/* Vercel-style Contact form */}
            <Contact />
          </main>

          {/* 6. Footer bar */}
          <Footer />
        </div>
      )}
    </>
  );
}
