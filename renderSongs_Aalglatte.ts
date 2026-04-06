import { spawn } from "child_process";
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

type RenderJob = {
  outputFile: string;
  props: any;
};

// ************************************************************************
// album 01: RITORNO AL FUTURO colors
// ************************************************************************
const RITORNO_AL_FUTURO_ACCENT_COLOR = "#FF0092";
const RITORNO_AL_FUTURO_BACKGROUND_COLOR = "#000000";
const RITORNO_AL_FUTURO_FOREGROUND_COLOR = "#ffffff";

// ALBUM NAME
const RITORNO_AL_FUTURO_ALBUM_NAME_COLOR = chroma(
  RITORNO_AL_FUTURO_ACCENT_COLOR,
)
  .alpha(0.45)
  .css();

// SONG
const RITORNO_AL_FUTURO_SONG_NAME_COLOR = chroma(
  RITORNO_AL_FUTURO_FOREGROUND_COLOR,
)
  .alpha(1)
  .css();

const RITORNO_AL_FUTURO_SONG_AUTHOR_COLOR = chroma(
  RITORNO_AL_FUTURO_ACCENT_COLOR,
)
  .alpha(0.7)
  .css();

const RITORNO_AL_FUTURO_SONG_DURATION_COLOR = RITORNO_AL_FUTURO_ACCENT_COLOR;

const RITORNO_AL_FUTURO_ACTIVE_SONG_SONG_NAME_COLOR = chroma(
  RITORNO_AL_FUTURO_ACCENT_COLOR,
)
  .mix(RITORNO_AL_FUTURO_BACKGROUND_COLOR, 0.9)
  .hex();

const RITORNO_AL_FUTURO_ACTIVE_SONG_SONG_AUTHOR_COLOR = chroma(
  RITORNO_AL_FUTURO_ACCENT_COLOR,
)
  .mix(RITORNO_AL_FUTURO_BACKGROUND_COLOR, 0.7)
  .hex();

const RITORNO_AL_FUTURO_ACTIVE_SONG_SONG_DURATION_COLOR = chroma(
  RITORNO_AL_FUTURO_ACCENT_COLOR,
)
  .mix(RITORNO_AL_FUTURO_BACKGROUND_COLOR, 0.7)
  .hex();

const RITORNO_AL_FUTURO_ALBUM_BOX_SHADOW_COLOR = chroma(
  RITORNO_AL_FUTURO_ACCENT_COLOR,
)
  .alpha(0.22)
  .css();

export const RITORNO_AL_FUTURO_COLOR_THEME = getColorTheme({
  accent: RITORNO_AL_FUTURO_ACCENT_COLOR,
  background: RITORNO_AL_FUTURO_BACKGROUND_COLOR,
  songName: RITORNO_AL_FUTURO_SONG_NAME_COLOR,
  authorName: RITORNO_AL_FUTURO_SONG_AUTHOR_COLOR,
  duration: RITORNO_AL_FUTURO_SONG_DURATION_COLOR,
  activeSongName: RITORNO_AL_FUTURO_ACTIVE_SONG_SONG_NAME_COLOR,
  activeSongAuthor: RITORNO_AL_FUTURO_ACTIVE_SONG_SONG_AUTHOR_COLOR,
  activeSongDuration: RITORNO_AL_FUTURO_ACTIVE_SONG_SONG_DURATION_COLOR,
  albumShadow: RITORNO_AL_FUTURO_ALBUM_BOX_SHADOW_COLOR,
  albumNameColor: RITORNO_AL_FUTURO_ALBUM_NAME_COLOR,
  waveColor: RITORNO_AL_FUTURO_ACCENT_COLOR,
});

const colorsRitornoAlFuturo = {
  backgroundColor: RITORNO_AL_FUTURO_COLOR_THEME.background,
  progressBarBackgroundColor:
    RITORNO_AL_FUTURO_COLOR_THEME.progressBar.background,
  progressBarColor: RITORNO_AL_FUTURO_COLOR_THEME.progressBar.color,
  shadowColor: RITORNO_AL_FUTURO_COLOR_THEME.albumShadow,
  waveColor: RITORNO_AL_FUTURO_COLOR_THEME.wave,
  artistColor: RITORNO_AL_FUTURO_COLOR_THEME.song.author,
  albumNameColor: RITORNO_AL_FUTURO_COLOR_THEME.albumNameColor,
  songNameColor: RITORNO_AL_FUTURO_COLOR_THEME.song.name,
  durationColor: RITORNO_AL_FUTURO_COLOR_THEME.song.duration,
};

// ************************************************************************
// album 02: SECOND THOUGHTS colors
// ************************************************************************
const SECOND_THOUGHTS_ACCENT_COLOR = chroma("#f05122")
  .darken(0.8)
  .saturate(-0.7)
  .hex();

const SECOND_THOUGHTS_BACKGROUND_COLOR = chroma("#f05122")
  .mix("#000000", 0.97)
  .hex();

const SECOND_THOUGHTS_ALBUM_NAME_COLOR = chroma(SECOND_THOUGHTS_ACCENT_COLOR)
  .alpha(0.45)
  .css();

const SECOND_THOUGHTS_SONG_NAME_COLOR = chroma("#f05122")
  .darken(0.5)
  .saturate(0.6)
  .hex();

const SECOND_THOUGHTS_SONG_AUTHOR_COLOR = chroma(SECOND_THOUGHTS_ACCENT_COLOR)
  .alpha(1)
  .css();
const SECOND_THOUGHTS_SONG_DURATION_COLOR = SECOND_THOUGHTS_ACCENT_COLOR;

const SECOND_THOUGHTS_ACTIVE_SONG_SONG_NAME_COLOR = "#222222";

const SECOND_THOUGHTS_ACTIVE_SONG_SONG_AUTHOR_COLOR = chroma(
  SECOND_THOUGHTS_ACCENT_COLOR,
)
  .mix(SECOND_THOUGHTS_BACKGROUND_COLOR, 0.7)
  .hex();

const SECOND_THOUGHTS_ACTIVE_SONG_SONG_DURATION_COLOR = chroma(
  SECOND_THOUGHTS_ACCENT_COLOR,
)
  .mix(SECOND_THOUGHTS_BACKGROUND_COLOR, 0.7)
  .hex();

const SECOND_THOUGHTS_ALBUM_BOX_SHADOW_COLOR = chroma("#f05122")
  .darken(0.5)
  .saturate(0.8)
  .alpha(0.5)
  .css();

const SECOND_THOUGHTS_WAVE_COLOR = "#FFD166";

export const SECOND_THOUGHTS_COLOR_THEME = getColorTheme({
  accent: SECOND_THOUGHTS_ACCENT_COLOR,
  background: SECOND_THOUGHTS_BACKGROUND_COLOR,
  songName: SECOND_THOUGHTS_SONG_NAME_COLOR,
  authorName: SECOND_THOUGHTS_SONG_AUTHOR_COLOR,
  duration: SECOND_THOUGHTS_SONG_DURATION_COLOR,
  activeSongName: SECOND_THOUGHTS_ACTIVE_SONG_SONG_NAME_COLOR,
  activeSongAuthor: SECOND_THOUGHTS_ACTIVE_SONG_SONG_AUTHOR_COLOR,
  activeSongDuration: SECOND_THOUGHTS_ACTIVE_SONG_SONG_DURATION_COLOR,
  albumShadow: SECOND_THOUGHTS_ALBUM_BOX_SHADOW_COLOR,
  albumNameColor: SECOND_THOUGHTS_ALBUM_NAME_COLOR,
  waveColor: SECOND_THOUGHTS_WAVE_COLOR,
});

const colorsSecondThoughts = {
  backgroundColor: SECOND_THOUGHTS_COLOR_THEME.background,
  progressBarBackgroundColor:
    SECOND_THOUGHTS_COLOR_THEME.progressBar.background,
  progressBarColor: SECOND_THOUGHTS_COLOR_THEME.progressBar.color,
  shadowColor: SECOND_THOUGHTS_COLOR_THEME.albumShadow,
  waveColor: SECOND_THOUGHTS_COLOR_THEME.wave,
  artistColor: SECOND_THOUGHTS_COLOR_THEME.song.author,
  albumNameColor: SECOND_THOUGHTS_COLOR_THEME.albumNameColor,
  songNameColor: SECOND_THOUGHTS_COLOR_THEME.song.name,
  durationColor: SECOND_THOUGHTS_COLOR_THEME.song.duration,
};

// ************************************************************************
// album 03: semplicemente. colors
// ************************************************************************
const SEMPLICEMENTE_ACCENT_COLOR = "#DAD4CB";
const SEMPLICEMENTE_BACKGROUND_COLOR = "#000000";

// ALBUM NAME
const SEMPLICEMENTE_ALBUM_NAME_COLOR = chroma(SEMPLICEMENTE_ACCENT_COLOR)
  .alpha(0.45)
  .css();

// SONG
const SEMPLICEMENTE_SONG_NAME_COLOR = SEMPLICEMENTE_ACCENT_COLOR;

const SEMPLICEMENTE_SONG_AUTHOR_COLOR = chroma(SEMPLICEMENTE_ACCENT_COLOR)
  .alpha(1)
  .css();
const SEMPLICEMENTE_SONG_DURATION_COLOR = SEMPLICEMENTE_ACCENT_COLOR;

const SEMPLICEMENTE_ACTIVE_SONG_SONG_NAME_COLOR = chroma(
  SEMPLICEMENTE_ACCENT_COLOR,
)
  .mix(SEMPLICEMENTE_BACKGROUND_COLOR, 0.9)
  .hex();

const SEMPLICEMENTE_ACTIVE_SONG_SONG_AUTHOR_COLOR = chroma(
  SEMPLICEMENTE_ACCENT_COLOR,
)
  .mix(SEMPLICEMENTE_BACKGROUND_COLOR, 0.7)
  .hex();

const SEMPLICEMENTE_ACTIVE_SONG_SONG_DURATION_COLOR = chroma(
  SEMPLICEMENTE_ACCENT_COLOR,
)
  .mix(SEMPLICEMENTE_BACKGROUND_COLOR, 0.7)
  .hex();

const SEMPLICEMENTE_ALBUM_BOX_SHADOW_COLOR = chroma(SEMPLICEMENTE_ACCENT_COLOR)
  .alpha(0.22)
  .css();

const SEMPLICEMENTE_COLOR_THEME = getColorTheme({
  accent: SEMPLICEMENTE_ACCENT_COLOR,
  background: SEMPLICEMENTE_BACKGROUND_COLOR,
  songName: SEMPLICEMENTE_SONG_NAME_COLOR,
  authorName: SEMPLICEMENTE_SONG_AUTHOR_COLOR,
  duration: SEMPLICEMENTE_SONG_DURATION_COLOR,
  activeSongName: SEMPLICEMENTE_ACTIVE_SONG_SONG_NAME_COLOR,
  activeSongAuthor: SEMPLICEMENTE_ACTIVE_SONG_SONG_AUTHOR_COLOR,
  activeSongDuration: SEMPLICEMENTE_ACTIVE_SONG_SONG_DURATION_COLOR,
  albumShadow: SEMPLICEMENTE_ALBUM_BOX_SHADOW_COLOR,
  albumNameColor: SEMPLICEMENTE_ALBUM_NAME_COLOR,
  waveColor: SEMPLICEMENTE_ACCENT_COLOR,
});

const colorsSemplicemente = {
  backgroundColor: SEMPLICEMENTE_COLOR_THEME.background,
  progressBarBackgroundColor: SEMPLICEMENTE_COLOR_THEME.progressBar.background,
  progressBarColor: SEMPLICEMENTE_COLOR_THEME.progressBar.color,
  shadowColor: SEMPLICEMENTE_COLOR_THEME.albumShadow,
  waveColor: SEMPLICEMENTE_COLOR_THEME.accent,
  artistColor: SEMPLICEMENTE_COLOR_THEME.song.author,
  albumNameColor: SEMPLICEMENTE_COLOR_THEME.albumNameColor,
  songNameColor: SEMPLICEMENTE_COLOR_THEME.song.name,
  durationColor: SEMPLICEMENTE_COLOR_THEME.song.duration,
};

// ************************************************************************
// album 04: SAFARI colors
// ************************************************************************
const SAFARI_DARK_YELLOW = "#FFDB2A";
const SAFARI_ACCENT_COLOR = SAFARI_DARK_YELLOW;
const SAFARI_BACKGROUND_COLOR = "#000000";
const SAFARI_FOREGROUND_COLOR = "#ffffff";
const SAFARI_ALBUM_NAME_COLOR = chroma(SAFARI_ACCENT_COLOR).alpha(0.45).css();
const SAFARI_SONG_NAME_COLOR = chroma(SAFARI_FOREGROUND_COLOR).alpha(1).css();
const SAFARI_SONG_AUTHOR_COLOR = chroma(SAFARI_ACCENT_COLOR).alpha(1).css();
const SAFARI_SONG_DURATION_COLOR = SAFARI_ACCENT_COLOR;
const SAFARI_ACTIVE_SONG_SONG_NAME_COLOR = chroma(SAFARI_ACCENT_COLOR)
  .mix(SAFARI_BACKGROUND_COLOR, 0.9)
  .hex();
const SAFARI_ACTIVE_SONG_SONG_AUTHOR_COLOR = chroma(SAFARI_ACCENT_COLOR)
  .mix(SAFARI_BACKGROUND_COLOR, 0.7)
  .hex();
const SAFARI_ACTIVE_SONG_SONG_DURATION_COLOR = chroma(SAFARI_ACCENT_COLOR)
  .mix(SAFARI_BACKGROUND_COLOR, 0.7)
  .hex();
const SAFARI_ALBUM_BOX_SHADOW_COLOR = chroma(SAFARI_ACCENT_COLOR)
  .alpha(0.22)
  .css();
const SAFARI_COLOR_THEME = getColorTheme({
  accent: SAFARI_ACCENT_COLOR,
  background: SAFARI_BACKGROUND_COLOR,
  songName: SAFARI_SONG_NAME_COLOR,
  authorName: SAFARI_SONG_AUTHOR_COLOR,
  duration: SAFARI_SONG_DURATION_COLOR,
  activeSongName: SAFARI_ACTIVE_SONG_SONG_NAME_COLOR,
  activeSongAuthor: SAFARI_ACTIVE_SONG_SONG_AUTHOR_COLOR,
  activeSongDuration: SAFARI_ACTIVE_SONG_SONG_DURATION_COLOR,
  albumShadow: SAFARI_ALBUM_BOX_SHADOW_COLOR,
  albumNameColor: SAFARI_ALBUM_NAME_COLOR,
  waveColor: SAFARI_ACCENT_COLOR,
});

const colorsSafari = {
  backgroundColor: SAFARI_COLOR_THEME.background,
  progressBarBackgroundColor: SAFARI_COLOR_THEME.progressBar.background,
  progressBarColor: SAFARI_COLOR_THEME.progressBar.color,
  shadowColor: SAFARI_COLOR_THEME.albumShadow,
  waveColor: SAFARI_COLOR_THEME.accent,
  artistColor: SAFARI_COLOR_THEME.song.author,
  albumNameColor: SAFARI_COLOR_THEME.albumNameColor,
  songNameColor: SAFARI_COLOR_THEME.song.name,
  durationColor: SAFARI_COLOR_THEME.song.duration,
};

// ************************************************************************
// album 01: ritorno al futuro
// ************************************************************************

const IL_PARCO_DELLA_LUNA = {
  ...colorsRitornoAlFuturo,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-01/il parco della luna_1.mp3",
  coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",
  songName: "Il parco della luna",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 35,
  songNr: "RITORNO AL FUTURO",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const FRANZISKA = {
  ...colorsRitornoAlFuturo,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-01/251031 franziska 2.mp3",
  coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",
  songName: "Franziska",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 8,
  songNr: "RITORNO AL FUTURO",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const NANCY = {
  ...colorsRitornoAlFuturo,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-01/nancy.mp3",
  coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",
  songName: "Nancy",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 26,
  songNr: "RITORNO AL FUTURO",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const ANGIOLINA = {
  ...colorsRitornoAlFuturo,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-01/angiolina.mp3",
  coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",
  songName: "Angiolina",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 60 + 29,
  songNr: "RITORNO AL FUTURO",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const UN_PAZZO_COME_ME = {
  ...colorsRitornoAlFuturo,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-01/un pazzo come me.mp3",
  coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",
  songName: "Un pazzo come me",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 11,
  songNr: "RITORNO AL FUTURO",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const GLAUB_ICH_BIN_VERLIEBT = {
  ...colorsRitornoAlFuturo,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "aalglatte/album-01/251025 glaub ich bin verliebt - 25_10_2025, 21.22.mp3",
  coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",
  songName: "Glaub ich bin verliebt",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 60 + 57,
  songNr: "RITORNO AL FUTURO",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const BEPPE = {
  ...colorsRitornoAlFuturo,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-01/251012 beppe - 12_10_2025, 18.03.mp3",
  coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",
  songName: "Beppe",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 60 + 29,
  songNr: "RITORNO AL FUTURO",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const L_ANIMA = {
  ...colorsRitornoAlFuturo,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-01/251012 l'anima - 12_10_2025, 21.56.mp3",
  coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",
  songName: "L'anima",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 16,
  songNr: "RITORNO AL FUTURO",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const ALI_DI_CERA = {
  ...colorsRitornoAlFuturo,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-01/251015 ali di cera - 16_10_2025, 13.07.mp3",
  coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",
  songName: "Ali di cera",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 0,
  songNr: "RITORNO AL FUTURO",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const THE_FUTURE = {
  ...colorsRitornoAlFuturo,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-01/the future (cohen) 01_4.mp3",
  coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",
  songName: "The future",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 56,
  songNr: "RITORNO AL FUTURO",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

// ************************************************************************
// album 02: second thoughts
// ************************************************************************
const ICH_HOER_MUSIK_WENN_ICH_DICH_SEH = {
  ...colorsSecondThoughts,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "aalglatte/album-02/ich hoer musik wenn ich dich seh (2raumwohnung).mp3",
  coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
  songName: "Ich hör Musik wenn ich dich seh",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 60 + 57,
  songNr: "SECOND THOUGHTS",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const LANNO_DELL_AMORE = {
  ...colorsSecondThoughts,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-02/l'anno dell' amore 5 (zucchero).mp3",
  coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
  songName: "L'anno dell amore",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 14,
  songNr: "SECOND THOUGHTS",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const RISPONDIMI = {
  ...colorsSecondThoughts,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-02/rispondimi (lucio dalla).mp3",
  coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
  songName: "Rispondimi",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 57,
  songNr: "SECOND THOUGHTS",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const GENTE_DELLA_NOTTE = {
  ...colorsSecondThoughts,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-02/gente della notte (jovanotti).mp3",
  coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
  songName: "Gente della notte",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 14,
  songNr: "SECOND THOUGHTS",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PIAZZA_GRANDE = {
  ...colorsSecondThoughts,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-02/piazza grande (lucio dalla).mp3",
  coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
  songName: "Piazza Grande",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 27,
  songNr: "SECOND THOUGHTS",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const FRANK = {
  ...colorsSecondThoughts,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-02/250525-frank-alternativ 2.m4a",
  coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
  songName: "Frank",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 12,
  songNr: "SECOND THOUGHTS",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const DIESE_SCHEIBE_IST_EIN_HIT = {
  ...colorsSecondThoughts,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "aalglatte/album-02/[Bb] Diese Scheibe ist ein Hit (Karl Dall).mp3",
  coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
  songName: "Diese Scheibe ist ein Hit",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 60 + 14,
  songNr: "SECOND THOUGHTS",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const DUNE_MOSSE = {
  ...colorsSecondThoughts,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "aalglatte/album-02/dune-mosse/dune mosse (inspired by Zucchero).mp3",
  coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
  songName: "Dune mosse",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 191,
  songNr: "SECOND THOUGHTS",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const OHNE_DICH = {
  ...colorsSecondThoughts,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-02/ohne-dich/ohne dich (groenemeyer).mp3",
  coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
  songName: "Ohne Dich",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 230,
  songNr: "SECOND THOUGHTS",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const DER_ZAHNARZT = {
  ...colorsSecondThoughts,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-02/der-zahnarzt/der zahnarzt.mp3",
  coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
  songName: "Der Zahnarzt",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 36,
  songNr: "SECOND THOUGHTS",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

// ************************************************************************
// album 03: semplicemente.
// ************************************************************************
const IL_PESCATORE = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-03/il-pescatore/01-il-pescatore.mp3",
  coverImageUrl: "aalglatte/album-03/semplicemente album@2x.png",
  songName: "Il Pescatore",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 216,
  songNr: "SEMPLICEMENTE.",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const DEINE_LIEBE_KLEBT = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-03/deine-liebe-klebt/02-deine-liebe-klebt.mp3",
  coverImageUrl: "aalglatte/album-03/semplicemente album@2x.png",
  songName: "Deine Liebe klebt",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 143,
  songNr: "SEMPLICEMENTE.",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PANE_E_SALE = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-03/pane-e-sale/03-pane-e-sale.mp3",
  coverImageUrl: "aalglatte/album-03/semplicemente album@2x.png",
  songName: "Pane e sale",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 58,
  songNr: "SEMPLICEMENTE.",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const UNA_NOTTE_CHE_VOLA_VIA = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "aalglatte/album-03/una-notte-che-vola-via/04-una-notte-che-vola-via.mp3",
  coverImageUrl: "aalglatte/album-03/semplicemente album@2x.png",
  songName: "Una notte che vola via",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 24,
  songNr: "SEMPLICEMENTE.",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const RIMINI = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-03/rimini/05-rimini.mp3",
  coverImageUrl: "aalglatte/album-03/semplicemente album@2x.png",
  songName: "Rimini",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 240 + 26,
  songNr: "SEMPLICEMENTE.",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const NIENTE_DA_PERDERE = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-03/niente da perdere (zucchero).mp3",
  coverImageUrl: "aalglatte/album-03/semplicemente album@2x.png",
  songName: "Niente da perdere",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 20,
  songNr: "SEMPLICEMENTE.",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const HAI_SCELTO_ME = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-03/[Am] Hai scelto me (Zucchero).mp3",
  coverImageUrl: "aalglatte/album-03/semplicemente album@2x.png",
  songName: "Hai scelto me",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 48,
  songNr: "SEMPLICEMENTE.",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const ALLORA_CANTO = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-03/allora canto (zucchero).mp3",
  coverImageUrl: "aalglatte/album-03/semplicemente album@2x.png",
  songName: "Allora canto",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 26,
  songNr: "SEMPLICEMENTE.",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const NOTHING_PLEASES_WITHOUT_YOU = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-03/nothing pleases without you.mp3",
  coverImageUrl: "aalglatte/album-03/semplicemente album@2x.png",
  songName: "Nothing pleases without you",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 12,
  songNr: "SEMPLICEMENTE.",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const LADY = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-03/Laldy (Neffa).mp3",
  coverImageUrl: "aalglatte/album-03/semplicemente album@2x.png",
  songName: "Lady",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 52,
  songNr: "SEMPLICEMENTE.",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

// ************************************************************************
// album 04: safari
// ************************************************************************
const UND = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-04/Und - X Naidoo 2026-02-15 2014.mp3",
  coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
  songName: "Und",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 300 + 46,
  songNr: "SAFARI",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const ALLES_VERAENDERT_SICH = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "aalglatte/album-04/alles-veraendert-sich/alles veraendert sich.mp3",
  coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
  songName: "Alles verändert sich",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 38,
  songNr: "SAFARI",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const VERBOTEN = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-04/verboten/verboten__traum-ohne-stern.mp3",
  coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
  songName: "Verboten",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 8,
  songNr: "SAFARI",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const AMICI = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-04/amici/amici 2026-01-17 2119.mp3",
  coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
  songName: "Amici",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 1,
  songNr: "SAFARI",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const CANZONE = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-04/canzone 2026-01-18 2204.mp3",
  coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
  songName: "Canzone",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 39,
  songNr: "SAFARI",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const KANONE = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "aalglatte/album-04/ich-kanone-dich-nicht-leben 2026-01-23 2131.mp3",
  coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
  songName: "Ich Kanone Dich nicht Leben",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 17,
  songNr: "SAFARI",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const CIAO = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-04/ciao 2026-01-24 1454.mp3",
  coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
  songName: "Ciao",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 240 + 28,
  songNr: "SAFARI",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const UND_IMMER = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-04/und-immer-groenemeyer 2026-01-31 2316.mp3",
  coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
  songName: "Und Immer",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 300 + 20,
  songNr: "SAFARI",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const ANNA = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-04/anna-hgroenemeyer 2026-02-05 2038.mp3",
  coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
  songName: "Anna",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 240 + 51,
  songNr: "SAFARI",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const LANNO_CHE_VERRA = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-04/Lanno che verra 2026-02-06 2001.mp3",
  coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
  songName: "L'anno che verrà",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 240 + 4,
  songNr: "SAFARI",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

// ************************************************************************
// album 05: aalglatt
// ************************************************************************
const _1999 = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-05/1999 (L.Dalla) 2026-03-01 2043.mp3",
  coverImageUrl: "aalglatte/album-05/AALGLATT Album.jpg",
  songName: "1999",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 240 + 27,
  songNr: "AALGLATT",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const DIMMI_DIMMI = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-05/dimmi dimmi - L.Dalla 2026-03-07 1751.mp3",
  coverImageUrl: "aalglatte/album-05/AALGLATT Album.jpg",
  songName: "Dimmi Dimmi",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 21,
  songNr: "AALGLATT",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const BLEIBT_ALLES_ANDERS = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "aalglatte/album-05/bleibt alles anders - h.groenemeyer 2026-03-08 1508.mp3",
  coverImageUrl: "aalglatte/album-05/AALGLATT Album.jpg",
  songName: "Bleibt alles anders",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 240 + 24,
  songNr: "AALGLATT",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const ALICE = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-05/alice (cro) 2026-03-10 1536.mp3",
  coverImageUrl: "aalglatte/album-05/AALGLATT Album.jpg",
  songName: "Alice",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 240 + 24,
  songNr: "AALGLATT",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const NICE_UND_KLAR = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-05/Nice und klar 2026-03-11 1729.wav",
  coverImageUrl: "aalglatte/album-05/AALGLATT Album.jpg",
  songName: "Nice und klar",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 16,
  songNr: "AALGLATT",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const COME_SEI = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-05/Come sei (G.Nannini) 2026-03-12 1729.wav",
  coverImageUrl: "aalglatte/album-05/AALGLATT Album.jpg",
  songName: "Come sei",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 41,
  songNr: "AALGLATT",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const MELODIE = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-05/melodie-v0.5 2026-03-14 2022.wav",
  coverImageUrl: "aalglatte/album-05/AALGLATT Album.jpg",
  songName: "Melodie",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 180 + 37,
  songNr: "AALGLATT",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const SMOOTH = {
  ...colorsSemplicemente,
  audioOffsetInSeconds: 0,
  audioFileUrl: "aalglatte/album-05/smooth (cro) 2026-03-17 1835.wav",
  coverImageUrl: "aalglatte/album-05/AALGLATT Album.jpg",
  songName: "Smooth",
  songArtist: "AAL G. LATTE",
  songDurationInSeconds: 120 + 42,
  songNr: "AALGLATT",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

// THE PINCH - Selling Hope Buying Time

const PINCH_MIDDAY_MAURADERS = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/1_The Pinch_Midday Mauraders_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Midday Mauraders",
  songArtist: "THE PINCH",
  songDurationInSeconds: 180 + 38,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_STAY_FREE = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/2_The Pinch_Stay Free_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Stay Free",
  songArtist: "THE PINCH",
  songDurationInSeconds: 180 + 14,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_SELLING_HOPE_BUYING_TIME = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/3_The Pinch_Selling Hope Buying Time_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Stay Free",
  songArtist: "THE PINCH",
  songDurationInSeconds: 240 + 22,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_BRAINDEAD = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/4_The Pinch_Braindead_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Braindead",
  songArtist: "THE PINCH",
  songDurationInSeconds: 180 + 26,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_THE_TRUTH = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/5_The Pinch_The Truth_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "The Truth",
  songArtist: "THE PINCH",
  songDurationInSeconds: 240 + 18,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_TRAVELLING = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/6_The Pinch_Travelling_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Travelling",
  songArtist: "THE PINCH",
  songDurationInSeconds: 180 + 42,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_MILLION_DOLLAR_SMILE = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/7_The Pinch_featuring Hinni_Million Dollar Smile_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Million Dollar Smile (feat. Hinni)",
  songArtist: "THE PINCH",
  songDurationInSeconds: 240 + 15,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_SAUSAGE_EGGS_AND_BAKED_BEANS = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/8_The Pinch_Sausage, Eggs and Baked Beans_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Sausage, Eggs and Baked Beans",
  songArtist: "THE PINCH",
  songDurationInSeconds: 180 + 58,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_DIVINE = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/9_The Pinch_Divine_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Divine",
  songArtist: "THE PINCH",
  songDurationInSeconds: 60 + 1,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_INFERNO = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/10_The Pinch_Inferno_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Inferno",
  songArtist: "THE PINCH",
  songDurationInSeconds: 180 + 44,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_MANS_WORLD = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/11_The Pinch_Man's World_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Man's World",
  songArtist: "THE PINCH",
  songDurationInSeconds: 240 + 22,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_ABOVE_IT_ALL = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/12_The Pinch_Above It All_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Above It All",
  songArtist: "THE PINCH",
  songDurationInSeconds: 240 + 29,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

const PINCH_CYCLONES = {
  ...colorsSafari,
  audioOffsetInSeconds: 0,
  audioFileUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/13_The Pinch_featuring Mellie Meteors_Cyclones_24bit_48khz.wav",
  coverImageUrl:
    "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",
  songName: "Cyclones (feat. Mellie Meteors)",
  songArtist: "THE PINCH",
  songDurationInSeconds: 180 + 54,
  songNr: "Selling Hope Buying Time",
  visualizer: {
    type: "spectrum" as const,
    bassOverlay: true,
    linesToDisplay: 40,
    mirrorWave: false,
    numberOfSamples: "1024" as const,
  },
};

// album 1: ritorno al futuro
void IL_PARCO_DELLA_LUNA;
void FRANZISKA;
void NANCY;
void ANGIOLINA;
void UN_PAZZO_COME_ME;
void GLAUB_ICH_BIN_VERLIEBT;
void BEPPE;
void L_ANIMA;
void ALI_DI_CERA;
void THE_FUTURE;

// album 2: second thoughts
void ICH_HOER_MUSIK_WENN_ICH_DICH_SEH;
void DUNE_MOSSE;
void OHNE_DICH;
void LANNO_DELL_AMORE;
void RISPONDIMI;
void GENTE_DELLA_NOTTE;
void PIAZZA_GRANDE;
void DER_ZAHNARZT;
void FRANK;
void DIESE_SCHEIBE_IST_EIN_HIT;

// album 3: semplicemente
void IL_PESCATORE;
void DEINE_LIEBE_KLEBT;
void PANE_E_SALE;
void UNA_NOTTE_CHE_VOLA_VIA;
void RIMINI;
void NIENTE_DA_PERDERE;
void HAI_SCELTO_ME;
void ALLORA_CANTO;
void NOTHING_PLEASES_WITHOUT_YOU;
void LADY;

// album 4: safary
void ALLES_VERAENDERT_SICH;
void VERBOTEN;
void AMICI;
void CANZONE;
void KANONE;
void CIAO;
void UND_IMMER;
void ANNA;
void LANNO_CHE_VERRA;
void UND;

// album 5: aalglatt
void _1999;
void DIMMI_DIMMI;
void BLEIBT_ALLES_ANDERS;
void ALICE;
void NICE_UND_KLAR;
void COME_SEI;
void MELODIE;
void SMOOTH;

// album: the pinch
void PINCH_MIDDAY_MAURADERS;
void PINCH_STAY_FREE;
void PINCH_SELLING_HOPE_BUYING_TIME;
void PINCH_BRAINDEAD;
void PINCH_THE_TRUTH;
void PINCH_TRAVELLING;
void PINCH_MILLION_DOLLAR_SMILE;
void PINCH_SAUSAGE_EGGS_AND_BAKED_BEANS;
void PINCH_DIVINE;
void PINCH_INFERNO;
void PINCH_MANS_WORLD;
void PINCH_ABOVE_IT_ALL;
void PINCH_CYCLONES;

const renders: any[] = [
  // *********************
  // album 1: Ritorno al Futuro
  // *********************
  // IL_PARCO_DELLA_LUNA,
  // FRANZISKA,
  // NANCY,
  // ANGIOLINA,
  // UN_PAZZO_COME_ME,
  // GLAUB_ICH_BIN_VERLIEBT,
  // BEPPE,
  // L_ANIMA,
  // ALI_DI_CERA,
  // THE_FUTURE,

  // *********************
  // album 2: second thoughts
  // *********************
  // FRANK,
  // ICH_HOER_MUSIK_WENN_ICH_DICH_SEH,
  // DUNE_MOSSE,
  // OHNE_DICH,
  // LANNO_DELL_AMORE,
  // RISPONDIMI,
  // GENTE_DELLA_NOTTE,
  // PIAZZA_GRANDE,
  // DER_ZAHNARZT,
  // DIESE_SCHEIBE_IST_EIN_HIT,

  // *********************
  // album 3: semplicemente
  // *********************
  // IL_PESCATORE,
  // DEINE_LIEBE_KLEBT,
  // PANE_E_SALE,
  // UNA_NOTTE_CHE_VOLA_VIA,
  // RIMINI,
  // NIENTE_DA_PERDERE,
  // HAI_SCELTO_ME,
  // ALLORA_CANTO,
  // NOTHING_PLEASES_WITHOUT_YOU,
  // LADY,

  // *********************
  // album 4: safari
  // *********************
  // ALLES_VERAENDERT_SICH,
  // VERBOTEN,
  // AMICI,
  // CANZONE,
  // KANONE,
  // CIAO,
  // UND_IMMER,
  // ANNA,
  // LANNO_CHE_VERRA,
  // UND,

  // *********************
  // album 5: aalglatt
  // *********************
  // DIMMI_DIMMI,
  // _1999,
  // BLEIBT_ALLES_ANDERS,
  // ALICE,
  // NICE_UND_KLAR,
  // COME_SEI,
  // MELODIE,
  // SMOOTH,

  // *********************
  // THE PINCH
  // *********************
  PINCH_MIDDAY_MAURADERS,
  PINCH_STAY_FREE,
  PINCH_SELLING_HOPE_BUYING_TIME,
  PINCH_BRAINDEAD,
  PINCH_THE_TRUTH,
  PINCH_TRAVELLING,
  PINCH_MILLION_DOLLAR_SMILE,
  PINCH_SAUSAGE_EGGS_AND_BAKED_BEANS,
  PINCH_DIVINE,
  PINCH_INFERNO,
  PINCH_MANS_WORLD,
  PINCH_ABOVE_IT_ALL,
  PINCH_CYCLONES,
];

async function runRender({ outputFile, props }: RenderJob) {
  return new Promise<void>((resolve, reject) => {
    console.log(`\n🎬 Starting: ${outputFile}\n`);

    const child = spawn(
      "npx",
      [
        "remotion",
        "render",
        "WideSingleSong",
        outputFile,
        "--props",
        JSON.stringify(props),
        // "--frames=0-119",
      ],
      {
        shell: false, // 🔴 IMPORTANT
        stdio: "inherit",
      },
    );

    child.on("error", (err: Error) => {
      reject(err);
    });

    child.on("close", (code: number) => {
      if (code === 0) {
        console.log(`\n✅ Finished: ${outputFile}`);
        resolve();
      } else {
        reject(new Error(`❌ Render failed (exit code ${code})`));
      }
    });
  });
}

async function runAllSequential() {
  try {
    for (const render of renders) {
      const job = {
        props: render,
        outputFile: `./out/aalglatte/${
          render.songName
            .toLowerCase()
            .normalize("NFD") // split accents
            .replace(/[\u0300-\u036f]/g, "") // remove accents (è → e)
            .replace(/['"`]/g, "") // remove quotes (← fixes your issue)
            .replace(/\s+/g, "-") // spaces → dash
            .replace(/[^a-z0-9-_]/g, "") // remove everything else unsafe
        }.mp4`,
        // outputFile: `./out/aalglatte/${render.songName.replace(/\s+/g, "-")}.mp4`,
      };
      await runRender(job);
    }
    console.log("\n🎉 All renders completed!");
  } catch (err) {
    console.error("\n⛔ Aborted due to error:", (err as Error).message);
    process.exit(1);
  }
}
runAllSequential();
