import React, { useState, useRef } from "react";

const AudioPlayer = ({
  setIsPlaying,
  isPlaying,
  togglePlayPause,
  audioRef,
  currentAudio,
  setCurrentAudio,
}) => {
  const audioPlayer = document.getElementById("audioPlayer");
  return (
    <div>
      <audio
        id="audioPlayer"
        preload="metadata"
        ref={audioRef}
        src={require(`../../../assets/audio/${currentAudio}`)}
        type="audio/mp3"
      ></audio>
    </div>
  );
};

export default AudioPlayer;
