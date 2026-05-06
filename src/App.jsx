import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FloatingCard from "./components/FloatingCard";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <div className="relative">
          <FloatingCard />
          <Navbar />
          <Hero />
          <Services />
          <About />
          <ShowcaseSection />
          <LogoShowcase />
          <Experience />
          <TechStack />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
