import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "./Header.css";
import HamMenu from "../HamMenu";
import SocialIconsDark from "../SocialIconsDark";
import SocialIconsNav from "../SocialIconsNav";

const Header = ({ isOpen, setIsOpen }) => {
  console.log(isOpen);
  return (
    <header className="gradient header">
      <Icon
        onClick={() => setIsOpen(!isOpen)}
        className={`ham__icon ${isOpen ? "ham__open" : "ham__closed"}`}
        icon="ri:menu-4-fill"
      />

      <div className="nav-wrapper">
        <a>
          <h1>Akemi</h1>
        </a>
        <SocialIconsNav></SocialIconsNav>
      </div>
      {isOpen ? <HamMenu></HamMenu> : ""}
    </header>
  );
};

export default Header;
