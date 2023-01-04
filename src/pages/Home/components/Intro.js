import React from "react";
import { Icon } from "@iconify/react";

const Intro = () => {
  return (
    <section className="intro-wrapper margin ">
      <article className="intro-section">
        <p className="p1 bold italic m-p5">
          Singer, songwriter and producer all at once,{" "}
        </p>
        <p className="p2 m-2">
          Akemi has a spiritual perspective on music. Her passion is natural; to
          her, music is cathartic and therapeutic. She fell in love with
          performing arts after starting theatre at a very young age, developing
          an unconditional love for the stage and the audience.
        </p>
        <p className="p2  m-p75 bold">
          Akemi wants to help and heal through her music.
        </p>
        <Icon icon="fxemoji:franceflag" />
      </article>{" "}
      <img
        alt="Akemi during a promotional shoot sitting on a bed."
        className="intro__img box-shadow"
        src={require("../../../assets/images/PictureMain.jpg")}
      />
    </section>
  );
};

export default Intro;
