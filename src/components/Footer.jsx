import React from "react";
import "./css/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div class="text-center pb-10 pt-12">
      <p className="text-slate-500 style_text">
        All code on my GitHub is open for unrestricted use, no copyrights
        reserved. Feel free to utilize it as needed.
        <p>Uncopyright {year}. </p>
      </p>
    </div>
  );
};

export default Footer;
