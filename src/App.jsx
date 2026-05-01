import { Typewriter } from "react-simple-typewriter";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
}

export default App;
