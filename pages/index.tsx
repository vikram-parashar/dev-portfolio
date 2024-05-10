import Cursor from "@/components/Cursor";
import Skills from "@/components/home/Skills";
import Landing from "@/components/home/landing";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main className={`bg-gray-200 min-w-screen min-h-screen`}>
      <Landing />
      <Skills />
      <Projects/>
      <div className="w-1 h-screen"></div>
      <Cursor />
    </main>
  );
}
