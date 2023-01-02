import React, { useState, useRef } from "react";
import AudioPlayer from "./AudioPlayer";
import Card from "./Card";
const Singles = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState("aquarius.mp3");
  const audioRef = useRef();
  const togglePlayPause = async (e) => {
    const prevState = isPlaying;
    await setIsPlaying(!prevState);
    console.log(audioRef.current.duration);
    if (!prevState) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <section className=" singles-section">
      <div className="margin  singles-wrapper">
        <h4 className="bold m-p5">Singles</h4>
        <AudioPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          togglePlayPause={togglePlayPause}
          audioRef={audioRef}
          currentAudio={currentAudio}
          setCurrentAudio={setCurrentAudio}
        />
        <Card
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          currentAudio={currentAudio}
          setCurrentAudio={setCurrentAudio}
        ></Card>
      </div>
    </section>
  );
};

export default Singles;
