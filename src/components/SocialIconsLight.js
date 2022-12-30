import React from "react";
import { socialIcons } from "../data/social-icons.js";
import { Icon } from "@iconify/react";
const SocialIconsLight = () => {
  return (
    <div className="icon-grid-column m-p5">
      {socialIcons.map((icon) => (
        <div className="icon-wrapper-light" key={icon.icon}>
          <a className="icon-host" target="_blank" href={icon.link}>
            <Icon className="icon icon-light" icon={icon.icon}></Icon>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialIconsLight;
