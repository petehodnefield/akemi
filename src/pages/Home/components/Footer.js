import React from "react";
import SocialIconsDark from "../../../components/SocialIconsDark";

const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();
  return (
    <footer>
      <SocialIconsDark></SocialIconsDark>
      <p className="p3">©{currentYear} Akemi Music</p>
    </footer>
  );
};

export default Footer;
