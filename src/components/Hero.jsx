import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-2 items-center h-screen">
      <div className="text-center">
        <h1 className="font-heading md:text-4xl text-xl text-gradient ">
          <div>Hi, </div>
          I am{" "}
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
        <h2 className="font-heading md:text-2xl text-lg text-gradient">Painting with Code</h2>
        <h3 className="font-heading md:text-lg text-sm text-gradient">Art in every line, a craftsman in every dev.</h3>
      </div>
      <div className="md:w-full flex-center">
        <img src="/images/myavt.jpg" alt="My Avatar" className="rounded-xl w-66 h-88 md:w-72 md:h-96"/>
      </div>
    </section>
  );
};

export default Hero;
