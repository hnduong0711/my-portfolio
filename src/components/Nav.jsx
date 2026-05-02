import React, { useRef, useState } from "react";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
        backdropFilter: "blur(10px)",
        duration: 0,
        ease: "power1.inOut",
      },
    );
  });

  const overlayRef = useRef(null);

  useGSAP(
    () => {
      if (!overlayRef.current) return;

      if (isOpen) {
        gsap.to(overlayRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
          display: "block",
        });

        gsap.fromTo(
          ".nav-item",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 },
        );
      } else {
        gsap.to(overlayRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
          ease: "power4.in",
          display: "none",
        });
      }
    },
    { dependencies: [isOpen, isMobile] },
  );

  return (
    <nav className="fixed w-full z-50">
      <div
        className={`border-b border-primary md:px-20 py-2.5 flex-between ${isMobile ? "flex-between px-5" : ""}`}
      >
        <a href="#home">
          <h1 className="text-[28px] md:text-4xl  text-logo font-heading text-nowrap">
            Auth Sun
          </h1>
        </a>

        {isMobile ? (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-50 relative"
            >
              {isOpen ? <X color="black" /> : <Menu />}
            </button>

            {/* Overlay */}
            <div
              ref={overlayRef}
              className="absolute w-full top-0 left-0 bg-white z-40 shadow-xl opacity-0 -translate-y-full hidden"
            >
              <ul className="col-center py-5 gap-4">
                {navLinks.map((link) => (
                  <li key={link.id} className="nav-item">
                    <a
                      href={`#${link.id}`}
                      onClick={() => setIsOpen(false)}
                      className="text-xs text-black"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <ul className="flex-between gap-7 lg:gap-12">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="cursor-pointer text-nowrap md:text-sm"
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
