import React from "react";

function Footer() {
  return (
    <footer className="absolute bottom-[1px] flex gap-[5px] text-[15px] font-montserrat">
      <p>Tomás Espinal | </p>
      <nav className="flex gap-[5px] ">
        <a className="text-darkCyan transition-all hover:text-hoverDarkCyan" href="https://www.linkedin.com/in/tomas-espinal4/" target="_blanck">Linkedin</a>
        <a className="text-darkCyan transition-all hover:text-hoverDarkCyan" href="https://github.com/txmasito/card-component.git" target="_blanck">Github</a>
      </nav>
    </footer>
  );
}

export default Footer;
