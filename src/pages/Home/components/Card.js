import React, { useState, useEffect, useRef } from "react";
import { singlesData } from "../../../data/singles-data";
import { Icon } from "@iconify/react";
const Card = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playPause, setPlayPause] = useState("");
  const [currentAudio, setCurrentAudio] = useState("aquarius.mp3");
  const player = document.getElementById("player");
  useEffect(() => {
    isPlaying
      ? setPlayPause("ic:round-pause")
      : setPlayPause("material-symbols:play-arrow-rounded");
  }, [isPlaying]);

  return (
    <div className="singles-grid">
      <audio
        className="audio-player"
        id="player"
        src={require(`../../../assets/audio/${currentAudio}`)}
        type="audio/mp3"
        controls
      ></audio>
      {singlesData.map((single) => (
        <div className="card" key={single.title}>
          {" "}
          <img
            className="card-img"
            src={require(`../../../assets/images/${single.img}`)}
          ></img>
          <div className="card-text-wrapper">
            <p className="bold p3 card-text">{single.title}</p>
            <Icon
              onClick={() => {
                setIsPlaying(!isPlaying);
                {
                  isPlaying ? player.pause() : player.play();
                }
                setCurrentAudio(single.audio);
              }}
              className="play-pause-icon"
              icon={playPause}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
