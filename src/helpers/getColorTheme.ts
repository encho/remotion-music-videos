import chroma from "chroma-js";

export const getColorTheme = ({
  accent,
  background,
  songName,
  authorName,
  duration,
  activeSongName,
  activeSongAuthor,
  activeSongDuration,
  albumShadow,
  albumNameColor,
  waveColor,
}: {
  accent: string;
  background: string;
  songName: string;
  authorName: string;
  duration: string;
  activeSongName: string;
  activeSongAuthor: string;
  activeSongDuration: string;
  albumShadow: string;
  albumNameColor: string;
  waveColor: string;
}) => {
  const colorTheme = {
    accent,
    background,
    albumShadow,
    albumNameColor,
    progressBar: {
      color: accent,
      background: chroma(accent).alpha(0.2).css(),
    },
    wave: waveColor,
    song: {
      name: songName,
      author: authorName,
      duration: duration,
      active: {
        name: activeSongName,
        author: activeSongAuthor,
        duration: activeSongDuration,
      },
    },
  };

  return colorTheme;
};
