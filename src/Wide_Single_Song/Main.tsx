import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";

import { Spectrum } from "../Visualizer/Spectrum";
import { WideSingleSongCompositionSchemaType } from "../helpers/schema";
import { Waveform } from "../Visualizer/Waveform";
import { BassOverlay } from "../Visualizer/BassOverlay";
import { AlbumCover } from "../Visualizer/AlbumCover";
import { SongInfo } from "../Visualizer/SongInfo";
import { FONT_FAMILY } from "../helpers/font";
import { Audio } from "@remotion/media";

export const WideSingleSong: React.FC<WideSingleSongCompositionSchemaType> = ({
  visualizer,
  audioFileUrl,
  coverImageUrl,
  audioOffsetInSeconds,
  songNr,
  songName,
  songArtist,
  songDurationInSeconds,
  backgroundColor,
  progressBarBackgroundColor,
  progressBarColor,
  shadowColor,
  waveColor,
  artistColor,
  songNameColor,
  durationColor,
  albumNameColor,
}) => {
  const { fps } = useVideoConfig();
  const audioOffsetInFrames = Math.round(audioOffsetInSeconds * fps);

  return (
    // Parent flex container
    <div className="flex h-full w-full" style={{ gap: 60 }}>
      <AbsoluteFill style={{ backgroundColor }} />
      {visualizer.bassOverlay ? (
        <BassOverlay audioSrc={audioFileUrl} color={shadowColor} />
      ) : null}

      <Audio src={audioFileUrl} />

      <div className="flex-none" style={{ marginTop: 20 }}>
        <div
          className="albumCover"
          style={{
            width: 1920 / 2,
            height: 1920 / 2,
            scale: 0.85,
            // marginTop: 20,
            // marginLeft: 20,
            //
            transformStyle: "preserve-3d",
            transform: "perspective(800px) rotateY(10deg) rotateX(10deg)",
          }}
        >
          <div style={{ marginLeft: 100, marginTop: 25 }}>
            <AlbumCover
              imageUrl={coverImageUrl}
              audioSrc={audioFileUrl}
              zoomFactor={2}
              shadowColor={shadowColor}
              soundVisualizationEl={
                visualizer.type === "oscilloscope" ? (
                  <Waveform
                    waveColor={waveColor}
                    audioSrc={audioFileUrl}
                    windowInSeconds={visualizer.windowInSeconds}
                    amplitude={visualizer.amplitude}
                  />
                ) : visualizer.type === "spectrum" ? (
                  <Spectrum
                    heightFactor={0.5}
                    barColor={waveColor}
                    audioSrc={audioFileUrl}
                    mirrorWave={visualizer.mirrorWave}
                    numberOfSamples={Number(visualizer.numberOfSamples)}
                    waveLinesToDisplay={visualizer.linesToDisplay}
                  />
                ) : (
                  <></>
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Right column — half width with original content */}
      <div className="relative flex-1">
        <Sequence from={-audioOffsetInFrames}>
          <div
            className="flex items-center justify-center"
            style={{
              fontFamily: FONT_FAMILY,
              marginTop: -80,
            }}
          >
            <SongInfo
              artistColor={artistColor}
              albumNameColor={albumNameColor}
              songNameColor={songNameColor}
              durationColor={durationColor}
              progressBarBackgroundColor={progressBarBackgroundColor}
              progressBarColor={progressBarColor}
              songNr={songNr}
              songName={songName}
              songArtist={songArtist}
              songDurationInSeconds={songDurationInSeconds}
            />
          </div>
        </Sequence>
      </div>
    </div>
  );
};
