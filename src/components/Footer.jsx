import React from "react";

function Footer() {
  return (
    <footer className="absolute bottom-[5px] flex gap-[5px] text-[15px] font-montserrat">
      <p className="">Tomás Espinal | </p>
      <nav className="flex gap-[5px] ">
        <a className="text-darkCyan transition-all hover:text-hoverDarkCyan" href="https://www.linkedin.com/in/tomas-espinal4/">Linkedin</a>
        <a className="text-darkCyan transition-all hover:text-hoverDarkCyan" href="https://github.com/txmasito/card-component.git">Github</a>
      </nav>
    </footer>
  );
}

export default Footer;
