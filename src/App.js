import { useEffect, useState } from "react";
import Player from "./components/Player";

export default function App() {
  const [songs] = useState([
    {
      title: "Drown",
      artist: "Bring Me The Horizon",
      image: "/assets/drown.jpg",
      src: "/assets/Bring me the Horizon - Drown (Lyrics on Screen).mp3",
    },
    {
      title: "Lovely",
      artist: "Billie Eilish & Khalid ",
      image: "/assets/lovely.jpg",
      src: "/assets/Billie Eilish, Khalid - lovely.mp3",
    },
    {
      title: "Someone I Used To Know",
      artist: "Gotye",
      image: "/assets/gotye.jpg",
      src:
        "/assets/Somebody That I Used To Know - Gotye (Lyrics) ft. Kimbra.mp3",
    },
    {
      title: "La Vie En Rose",
      artist: "Laura & Anton",
      image: "/assets/laura.jpg",
      src: "/assets/Laura & Anton - La Vie En Rose.mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        songs={songs}
        nextSongIndex={nextSongIndex}
      />
    </div>
  );
}
