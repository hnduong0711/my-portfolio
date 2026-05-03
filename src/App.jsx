import { Typewriter } from "react-simple-typewriter";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Project from "./components/Project";
import WorkExp from "./components/WorkExp";
import Skills from "./components/Skills";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Project />
      <WorkExp />
      <Skills />
    </main>
  );
}

export default App;
