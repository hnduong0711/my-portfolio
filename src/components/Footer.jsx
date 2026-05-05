import React from "react";

const Footer = () => {
  return (
    <footer>
      <section id="footer" className="mt-20 py-12 px-4 text-center border-t border-white/10">
        <h2 className="text-xl md:text-2xl text-white mb-4">
          Let’s build something together.
        </h2>

        <p className="text-white/50 text-sm mb-6">
          I'm open to new opportunities and collaborations.
        </p>

        {/* Button */}
        <a
          href="mailto:hnduong0714@gmail.com"
          className="green-btn hover:scale-105 transition"
        >
          Contact me
        </a>

        {/* Links */}
        <div className="mt-6 flex justify-center gap-4 text-sm text-white/50">
          <a href="https://github.com/hnduong0711">GitHub</a>
          <a href="https://www.linkedin.com/in/hnduong/">LinkedIn</a>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-xs text-white/30">
        <div>© 2026 Duong Huynh Nhut</div>
        <div>Built with React, TailwindCSS & GSAP</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
