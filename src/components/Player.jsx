import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";

export default function Player({ nextSong, song }) {
  return (
    <div className="c-player">
      <audio src=""></audio>
      <h4>Playing Now</h4>
      <PlayerDetails song={song} />
      <PlayerControls />
      <p>
        <strong>Next up: </strong>
        {nextSong.title} by {nextSong.artist}
      </p>
    </div>
  );
}
