import React from "react";
import { socialIcons } from "../data/social-icons.js";
import { Icon } from "@iconify/react";

const SocialIconsDark = () => {
  return (
    <div className="icon-grid m-p5">
      {socialIcons.map((icon) => (
        <div className="icon-wrapper-dark" key={icon.icon}>
          <a className="icon-host" target="_blank" href={icon.link}>
            <Icon className=" icon icon-light" icon={icon.icon} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialIconsDark;
