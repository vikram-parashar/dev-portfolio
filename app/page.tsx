"use client"
import Cursor from "@/components/Cursor";
import Skills from "@/components/home/Skills";
import Landing from "@/components/home/landing";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className={`min-w-screen dark:bg-gray-900 dark:text-gray-200 min-h-screen bg-gray-200`}>
      <Header />
      <Landing />
      <Projects />
      {/* Heading */}
      <h1 className="scroll-m-20 mt-12 px-5 pb-2 text-4xl font-extrabold uppercase tracking-tight lg:text-5xl dark:border-b-gray-200">
      my skills
      </h1>
      <Skills />
      <Contact />
      <Footer />
      <Cursor />
    </main>
  );
}
