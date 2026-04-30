import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="">
        <h1>
          Hi, I am{" "}
          <Typewriter
            loop
            cursor
            cursorStyle="|"
            cursorColor="#00D4FF"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={2000}
            words={["Coder", "Developer", "Programmer"]}
          ></Typewriter>
        </h1>
        <h2>Painting with Code</h2>
        <h3>Art in every line, a craftsman in every dev.</h3>
      </div>
      <div className="flex-center">
        <img src="/images/myavt.jpg" alt="My Avatar"/>
      </div>
    </section>
  );
};

export default Hero;
