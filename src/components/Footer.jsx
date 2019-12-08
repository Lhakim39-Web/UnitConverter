import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with love | Copyright ⓒ of Luqman Hakim {year}</p>
    </footer>
  );
}

export default Footer;
