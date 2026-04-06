import chroma from "chroma-js";
import { getColorTheme } from "./getColorTheme";

// const LIGHT_YELLOW = "#FFF1AC";
const DARK_YELLOW = "#FFDB2A";

const ACCENT_COLOR = DARK_YELLOW;
// const ACCENT_COLOR = "#00ffff";
const BACKGROUND_COLOR = "#000000";
const FOREGROUND_COLOR = "#ffffff";

// ALBUM NAME
const ALBUM_NAME_COLOR = chroma(ACCENT_COLOR).alpha(0.45).css();

// SONG
const SONG_NAME_COLOR = chroma(FOREGROUND_COLOR).alpha(1).css();
const SONG_AUTHOR_COLOR = chroma(ACCENT_COLOR).alpha(1).css();
const SONG_DURATION_COLOR = ACCENT_COLOR;

const ACTIVE_SONG_SONG_NAME_COLOR = chroma(ACCENT_COLOR)
  .mix(BACKGROUND_COLOR, 0.9)
  .hex();

const ACTIVE_SONG_SONG_AUTHOR_COLOR = chroma(ACCENT_COLOR)
  .mix(BACKGROUND_COLOR, 0.7)
  .hex();

const ACTIVE_SONG_SONG_DURATION_COLOR = chroma(ACCENT_COLOR)
  .mix(BACKGROUND_COLOR, 0.7)
  .hex();

const ALBUM_BOX_SHADOW_COLOR = chroma(ACCENT_COLOR).alpha(0.22).css();

export const COLOR_THEME = getColorTheme({
  accent: ACCENT_COLOR,
  background: BACKGROUND_COLOR,
  songName: SONG_NAME_COLOR,
  authorName: SONG_AUTHOR_COLOR,
  duration: SONG_DURATION_COLOR,
  activeSongName: ACTIVE_SONG_SONG_NAME_COLOR,
  activeSongAuthor: ACTIVE_SONG_SONG_AUTHOR_COLOR,
  activeSongDuration: ACTIVE_SONG_SONG_DURATION_COLOR,
  albumShadow: ALBUM_BOX_SHADOW_COLOR,
  albumNameColor: ALBUM_NAME_COLOR,
  waveColor: ACCENT_COLOR,
});
