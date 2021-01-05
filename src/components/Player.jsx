import { useEffect, useRef, useState } from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";

export default function Player({
  nextSongIndex,
  songs,
  currentSongIndex,
  setCurrentSongIndex,
}) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audioEl.current.play() : audioEl.current.pause();
  });

  const skipSong = (forwards = true) => {
    return forwards
      ? setCurrentSongIndex(() => {
          let temp = currentSongIndex;
          temp++;
          if (temp > songs.length - 1) {
            temp = 0;
          }
          return temp;
        })
      : setCurrentSongIndex(() => {
          let temp = currentSongIndex;
          temp--;
          if (temp < 0) {
            temp = songs.length - 1;
          }
          return temp;
        });
  };

  return (
    <div className="c-player">
      <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
      <h4>Playing Now</h4>
      <PlayerDetails song={songs[currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <p>
        <strong>Next up: </strong>
        {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
      </p>
    </div>
  );
}
