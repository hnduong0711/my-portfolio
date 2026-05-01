import { Typewriter } from "react-simple-typewriter";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Project from "./components/Project";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Project />
    </main>
  );
}

export default App;
