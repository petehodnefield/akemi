import React, { useState, useEffect, useRef } from "react";
import { singlesData } from "../../../data/singles-data";
import { Icon } from "@iconify/react";
const Card = ({
  isPlaying,
  togglePlayPause,
  setCurrentAudio,
  currentAudio,
}) => {
  const checkIcon = (song) => {
    console.log(song, currentAudio);
    if (song + ".mp3" === currentAudio) {
      return "ic:round-pause";
    } else {
      return "material-symbols:play-arrow-rounded";
    }
  };
  return (
    <div className="singles-grid">
      {singlesData.map((single) => (
        <div
          className="card"
          key={single.title}
          onClick={() => {
            setCurrentAudio(single.audio);

            togglePlayPause();
          }}
        >
          {" "}
          <img
            className="card-img"
            src={require(`../../../assets/images/${single.img}`)}
          ></img>
          <div className="card-text-wrapper">
            <p className="bold p3 card-text">{single.title}</p>
            {single.audio === currentAudio && isPlaying ? (
              <Icon
                onClick={() => {
                  setCurrentAudio(single.audio);

                  togglePlayPause();
                }}
                className="play-pause-icon"
                icon="ic:round-pause"
              />
            ) : (
              <Icon
                onClick={() => {
                  setCurrentAudio(single.audio);

                  togglePlayPause();
                }}
                className="play-pause-icon"
                icon="material-symbols:play-arrow-rounded"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
