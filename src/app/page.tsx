import React from 'react';
import About from "@/components/about";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Projects from '@/components/projects/projects';
import Credits from '@/components/credits';

export default function Layout() {
  return (
    <section className="flex min-h-screen flex-col items-center px-6 lg:px-20">
      <div className="z-2 w-full max-w-7xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header />
        <div className='lg:pl-[48%]'>
          <About />
          <Experiences />
          <Projects />
          <Credits />
        </div>
      </div>
    </section>
  )
}
