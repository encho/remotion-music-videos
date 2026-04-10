import "./index.css";
import React from "react";
import { Composition, staticFile } from "remotion";
import { Visualizer } from "./Visualizer/Main";
import {
  visualizerCompositionSchema,
  wideSingleSongCompositionSchema,
} from "./helpers/schema";
import { ALL_FORMATS, Input, UrlSource } from "mediabunny";
import { WideSingleSong } from "./Wide_Single_Song/Main";
import { COLOR_THEME } from "./helpers/colorThemeStrictlyBb";
// import { COLOR_THEME } from "./helpers/colorThemeRitornoAlFuturo";
// import { COLOR_THEME } from "./helpers/colorThemeSafari";
// import { COLOR_THEME } from "./helpers/colorThemeSemplicemente";
// import { COLOR_THEME } from "./helpers/colorThemeSecondThoughts";

const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Visualizer"
        component={Visualizer}
        width={1920}
        height={1080}
        schema={visualizerCompositionSchema}
        // Default props you can override via CLI
        defaultProps={{
          audioOffsetInSeconds: 0,
          audioFileUrl: "03-semplicemente/02-deine-liebe-klebt.mp3",
          coverImageUrl: "03-semplicemente/semplicemente album@2x.png",
          activeIndex: 1,
          visualizer: {
            type: "spectrum" as const,
            bassOverlay: true,
            linesToDisplay: 55,
            mirrorWave: false,
            numberOfSamples: "1024" as const,
          },
        }}
        calculateMetadata={async ({ props }) => {
          // Determine actual URLs using staticFile()
          const resolvedAudioUrl = staticFile(props.audioFileUrl);
          const resolvedCoverUrl = staticFile(props.coverImageUrl);

          // Load the audio to get its duration
          const input = new Input({
            source: new UrlSource(resolvedAudioUrl, {
              getRetryDelay: () => null,
            }),
            formats: ALL_FORMATS,
          });

          const durationInSeconds = await input.computeDuration();

          return {
            fps: FPS,
            durationInFrames: Math.floor(
              (durationInSeconds - props.audioOffsetInSeconds) * FPS,
            ),
            props: {
              ...props,
              // Override props to pass fully resolved URLs
              audioFileUrl: resolvedAudioUrl,
              coverImageUrl: resolvedCoverUrl,
            },
          };
        }}
      />
      <Composition
        id="WideSingleSong"
        component={WideSingleSong}
        width={1920}
        height={1080}
        schema={wideSingleSongCompositionSchema}
        // Default props you can override via CLI
        defaultProps={{
          audioOffsetInSeconds: 0,
          // audioFileUrl:
          //   "aalglatte/album-03/deine-liebe-klebt/02-deine-liebe-klebt.mp3",
          // coverImageUrl: "aalglatte/album-03/pane-e-sale/Pane e Sale@2x.jpg",

          // audioFileUrl:
          //   "aalglatte/album-04/verboten/verboten__traum-ohne-stern.mp3",
          // // coverImageUrl: "aalglatte/album-04/verboten/SAFARI Verboten.jpg",
          // // coverImageUrl: "aalglatte/album-04/SAFARI Album.jpg",
          // // coverImageUrl: "aalglatte/album-03/SEMPLICEMENTE. Album.jpg",
          // coverImageUrl: "aalglatte/album-02/SECOND THOUGHTS Album.jpg",

          // audioFileUrl:
          //   "the-pinch/The Pinch - Selling Hope Buying Time/1_The Pinch_Midday Mauraders_24bit_48khz.wav",
          // coverImageUrl:
          //   "the-pinch/The Pinch - Selling Hope Buying Time/selling_hope_ep_cover_bop_01_2800px.jpg",

          // audioFileUrl:
          //   "aalglatte/album-02/ohne-dich/ohne dich (groenemeyer).mp3",

          audioFileUrl:
            "aalglatte/album-01/251012 beppe - 12_10_2025, 18.03.mp3",
          // coverImageUrl: "aalglatte/album-01/ritorno al futuro album@2x.png",

          coverImageUrl: "aalglatte/album-06-strictly-Bb/SIMPLY Bb Album.jpg",
          // coverImageUrl: "aalglatte/album-02/second thoughts album@2x.png",
          // coverImageUrl: "aalglatte/album-05/AALGLATT Album.jpg",

          backgroundColor: COLOR_THEME.background,
          progressBarBackgroundColor: COLOR_THEME.progressBar.background,
          progressBarColor: COLOR_THEME.progressBar.color,
          shadowColor: COLOR_THEME.albumShadow,
          waveColor: COLOR_THEME.wave,
          artistColor: COLOR_THEME.song.author,
          songNameColor: COLOR_THEME.song.name,
          durationColor: COLOR_THEME.song.duration,
          albumNameColor: COLOR_THEME.albumNameColor,
          // songNr: "Volume 03",
          // songNr: "Volume 03",
          // songNr: "Semplicemente.",

          songName: "1999",
          songArtist: "AAL G. LATTE",
          songDurationInSeconds: 240 + 27,
          songNr: "AALGLATT",

          // songName: "Ich Kanone Dich nicht Leben",
          // songArtist: "AAL G. LATTE",
          // songDurationInSeconds: 180 + 8,
          // songNr: "SAFARI",

          // songNr: "Ritorno al Futuro",
          // songName: "Deine Liebe klebt",
          // songArtist: "AAL G. LATTE",
          // songDurationInSeconds: 129,
          visualizer: {
            type: "spectrum" as const,
            bassOverlay: true,
            linesToDisplay: 40,
            mirrorWave: false,
            numberOfSamples: "1024" as const,
          },
        }}
        calculateMetadata={async ({ props }) => {
          // Determine actual URLs using staticFile()
          const resolvedAudioUrl = staticFile(props.audioFileUrl);
          const resolvedCoverUrl = staticFile(props.coverImageUrl);

          // Load the audio to get its duration
          const input = new Input({
            source: new UrlSource(resolvedAudioUrl, {
              getRetryDelay: () => null,
            }),
            formats: ALL_FORMATS,
          });

          const durationInSeconds = await input.computeDuration();

          return {
            fps: FPS,
            durationInFrames: Math.floor(
              (durationInSeconds - props.audioOffsetInSeconds) * FPS,
            ),
            props: {
              ...props,
              // Override props to pass fully resolved URLs
              audioFileUrl: resolvedAudioUrl,
              coverImageUrl: resolvedCoverUrl,
            },
          };
        }}
      />
    </>
  );
};
