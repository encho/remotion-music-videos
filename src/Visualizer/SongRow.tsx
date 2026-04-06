import React from "react";
import type { TSong } from "../helpers/schema";
import {
  ACTIVE_SONG_BORDER_RADIUS,
  COLOR_THEMES,
  colorThemeKey,
  SONG_AUTHOR_FONTSIZE,
  SONG_DURATION_FONTSIZE,
  SONG_DURATION_FONTWEIGHT,
  SONG_NAME_FONTSIZE,
} from "../helpers/styles";
import { useCurrentVideoTime } from "../helpers/useCurrentVideoTime";
import { BOLD_FONT_WEIGHT, MEDIUM_FONT_WEIGHT } from "../helpers/font";

type SongRowProps = {
  song: TSong;
  paddingHorizontal: number;
  paddingVertical: number;
  isActive: boolean;
};

export const SongRow: React.FC<SongRowProps> = ({
  song,
  paddingHorizontal,
  paddingVertical,
  isActive,
}) => {
  // convert seconds to M:SS
  const minutes = Math.floor(song.durationInSeconds / 60);
  const seconds = Math.floor(song.durationInSeconds % 60);
  const durationDisplay = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const currentSecondsElapsed = useCurrentVideoTime();
  const currentMinutes = Math.floor(currentSecondsElapsed / 60);
  const currentSeconds = Math.floor(currentSecondsElapsed % 60);
  const currentDurationDisplay = `${currentMinutes}:${currentSeconds.toString().padStart(2, "0")}`;

  const COLOR_THEME = COLOR_THEMES[colorThemeKey];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        backgroundColor: isActive ? COLOR_THEME.accent : "none",
        borderRadius: ACTIVE_SONG_BORDER_RADIUS,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: SONG_NAME_FONTSIZE,
            lineHeight: 1,
            marginBottom: 5,
            fontWeight: BOLD_FONT_WEIGHT,
            color: isActive
              ? COLOR_THEME.song.active.name
              : COLOR_THEME.song.name,
          }}
        >
          {song.songName}
        </span>
        <span
          style={{
            fontSize: SONG_AUTHOR_FONTSIZE,
            fontStyle: "italic",
            fontWeight: MEDIUM_FONT_WEIGHT,
            color: isActive
              ? COLOR_THEME.song.active.author
              : COLOR_THEME.song.author,
          }}
        >
          {song.songAuthor}
        </span>
      </div>

      <span
        style={{
          fontSize: SONG_DURATION_FONTSIZE,
          fontWeight: SONG_DURATION_FONTWEIGHT,
          color: isActive
            ? COLOR_THEME.song.active.duration
            : COLOR_THEME.song.duration,
        }}
      >
        {isActive ? (
          <div>
            {currentDurationDisplay} / {durationDisplay}
          </div>
        ) : (
          <div>{durationDisplay}</div>
        )}
      </span>
    </div>
  );
};
