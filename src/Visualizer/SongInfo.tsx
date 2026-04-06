import {
  BOLD_FONT_WEIGHT,
  FONT_FAMILY,
  MEDIUM_FONT_WEIGHT,
  THIN_FONT_WEIGHT,
} from "../helpers/font";
import { ProgressBar } from "./ProgressBar2";
import { useCurrentVideoTime } from "../helpers/useCurrentVideoTime";

export const SongInfo: React.FC<{
  songNr: string;
  songName: string;
  songArtist: string;
  songDurationInSeconds: number;
  progressBarColor: string;
  progressBarBackgroundColor: string;
  artistColor: string;
  albumNameColor: string;
  songNameColor: string;
  durationColor: string;
}> = ({
  songNr,
  songName,
  songArtist,
  songDurationInSeconds,
  progressBarColor,
  progressBarBackgroundColor,
  artistColor,
  albumNameColor,
  songNameColor,
  durationColor,
}) => {
  const minutes = Math.floor(songDurationInSeconds / 60);
  const seconds = Math.floor(songDurationInSeconds % 60);
  const durationDisplay = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const currentSecondsElapsed = useCurrentVideoTime();
  const currentMinutes = Math.floor(currentSecondsElapsed / 60);
  const currentSeconds = Math.floor(currentSecondsElapsed % 60);
  const currentDurationDisplay = `${currentMinutes}:${currentSeconds.toString().padStart(2, "0")}`;

  return (
    <div
      className="flex flex-col"
      style={{
        fontFamily: FONT_FAMILY,
        // paddingLeft: 23,
        // paddingRight: 23,
        // paddingTop: 23,
        // paddingBottom: 23,
      }}
    >
      <h2
        style={{
          color: artistColor,
          // fontSize: 55,
          fontSize: 50, // The Pinch
          lineHeight: 1,
          // fontWeight: MEDIUM_FONT_WEIGHT,
          fontWeight: BOLD_FONT_WEIGHT,
          letterSpacing: "-0.03em",
          marginBottom: 12,
        }}
      >
        {songArtist}{" "}
        <span
          style={{
            fontWeight: THIN_FONT_WEIGHT,
            color: albumNameColor,
          }}
        >
          |
        </span>{" "}
        <span
          style={{
            fontWeight: THIN_FONT_WEIGHT,
            color: albumNameColor,
            // fontStyle: "italic",
          }}
        >
          {songNr}
        </span>
      </h2>
      <h1
        style={{
          color: songNameColor,
          // letterSpacing: "-0.03em",
          fontSize: 120,
          fontWeight: BOLD_FONT_WEIGHT,
          lineHeight: 1,
          marginBottom: 40,
        }}
      >
        {songName}
      </h1>
      <span
        style={{
          fontSize: 40,
          fontWeight: MEDIUM_FONT_WEIGHT,
          color: durationColor,
          marginBottom: 10,
        }}
      >
        <div>
          {currentDurationDisplay} / {durationDisplay}
        </div>
      </span>

      <div
        style={{
          width: 800,
          height: 20,
          backgroundColor: "transparent",
        }}
      >
        <ProgressBar
          backgroundColor={progressBarBackgroundColor}
          fillColor={progressBarColor}
        />
      </div>
    </div>
  );
};
