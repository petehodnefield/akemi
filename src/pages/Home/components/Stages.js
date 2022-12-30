import React from "react";

const Stages = () => {
  return (
    <section className="stages-section">
      <div className="stages-wrapper margin ">
        <img
          className="stages-img m-1p5"
          src={require("../../../assets/images/stages.jpeg")}
        ></img>
        <h3 className="bold italic stages-header m-p5">Stages</h3>
        <a
          target="_blank"
          href="https://open.spotify.com/album/0QZHjqmOZ51pBiZBQGe0vu?si=e3d9a9911d78481d"
        >
          <button className="btn btn-primary pill">Listen</button>
        </a>
      </div>
    </section>
  );
};

export default Stages;
