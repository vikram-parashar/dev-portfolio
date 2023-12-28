"use client"

import Techstack from "./Techstack";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import MyWork from "./MyWork";
import Navbar from "./Navbar";
import Review from "./Review";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Techstack />
      <MyWork />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
