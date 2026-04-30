import React from "react";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <nav>
      <div className="">
        <a href="#home" >
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
