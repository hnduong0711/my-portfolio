import React from "react";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#1A1A1B",
        backgroundFilter: "blur(10px)",
        duration: 0,
        ease: "power1.inOut",
      },
    );
  });
  return (
    <nav>
      <div className="border-b-2 border-primary px-20 py-2.5">
        <a href="#home">
          <h1 className="text-[40px] text-logo">Auth Sun</h1>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
