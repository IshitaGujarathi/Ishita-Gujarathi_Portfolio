import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import JourneyRail from "./components/JourneyRail.jsx";
import Hero from "./components/Hero.jsx";
import Beginning from "./components/Beginning.jsx";
import SkillTree from "./components/SkillTree.jsx";
import DSAJourney from "./components/DSAJourney.jsx";
import Projects from "./components/Projects.jsx";
import Growth from "./components/Growth.jsx";
import Architecture from "./components/Architecture.jsx";
import Pipeline from "./components/Pipeline.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import CurrentStatus from "./components/CurrentStatus.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-paper text-ink font-body">
        <Navbar />
        <JourneyRail />
        <main>
          <Hero />
          <Beginning />
          <SkillTree />
          <DSAJourney />
          <Projects />
          <Growth />
          <Architecture />
          <Pipeline />
          <Education />
          <Experience />
          <CurrentStatus />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
