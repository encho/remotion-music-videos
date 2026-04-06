import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";

import { Spectrum } from "./Spectrum";
import { AudiogramCompositionSchemaType } from "../helpers/schema";
import { Waveform } from "./Waveform";
import { BassOverlay } from "./BassOverlay";
import { AlbumCover } from "./AlbumCover";
import { AlbumSongList } from "./AlbumSongList";
import { FONT_FAMILY } from "../helpers/font";
import { Audio } from "@remotion/media";
import { COLOR_THEMES, colorThemeKey } from "../helpers/styles";
import { SEMPLICEMENTE_SONGS } from "../helpers/songsSemplicemente";
import { ProgressBar } from "./ProgressBar";

export const Visualizer: React.FC<AudiogramCompositionSchemaType> = ({
  visualizer,
  audioFileUrl,
  coverImageUrl,
  audioOffsetInSeconds,
  activeIndex,
  // songs,
}) => {
  const { fps } = useVideoConfig();
  const audioOffsetInFrames = Math.round(audioOffsetInSeconds * fps);

  const COLOR_THEME = COLOR_THEMES[colorThemeKey];

  return (
    // Parent flex container
    <div
      className="flex h-full w-full"
      // style={{ gap: 10 }}
    >
      <AbsoluteFill style={{ backgroundColor: COLOR_THEME.background }} />
      {visualizer.bassOverlay ? (
        <BassOverlay audioSrc={audioFileUrl} color={COLOR_THEME.accent} />
      ) : null}

      <Audio src={audioFileUrl} />

      <div className="flex-none">
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
          <div style={{ marginLeft: 80, marginTop: 30, position: "relative" }}>
            <AlbumCover imageUrl={coverImageUrl} audioSrc={audioFileUrl} />

            {/* overlay that covers the whole album cover */}
            <div className="absolute inset-0 flex justify-center items-center">
              {/* visualizer centered both ways */}
              <div className="flex justify-center items-center w-5/6">
                {visualizer.type === "oscilloscope" ? (
                  <Waveform
                    waveColor={COLOR_THEME.accent}
                    audioSrc={audioFileUrl}
                    windowInSeconds={visualizer.windowInSeconds}
                    amplitude={visualizer.amplitude}
                  />
                ) : visualizer.type === "spectrum" ? (
                  <Spectrum
                    heightFactor={0.6}
                    barColor={COLOR_THEME.accent}
                    audioSrc={audioFileUrl}
                    mirrorWave={visualizer.mirrorWave}
                    numberOfSamples={Number(visualizer.numberOfSamples)}
                    waveLinesToDisplay={visualizer.linesToDisplay}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right column — half width with original content */}
      <div className="relative flex-1">
        {/* Keep the remotion AbsoluteFill inside a container so it doesn't fill the whole screen */}
        {/* <AbsoluteFill
          style={{
            position: "absolute", // contained by the parent div
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        > */}
        <Sequence from={-audioOffsetInFrames}>
          <AbsoluteFill
            style={{
              fontFamily: FONT_FAMILY,
            }}
          >
            <AlbumSongList
              songs={SEMPLICEMENTE_SONGS}
              activeIndex={activeIndex}
            />
          </AbsoluteFill>
        </Sequence>
        {/* </AbsoluteFill> */}
      </div>
      <ProgressBar
        backgroundColor={COLOR_THEME.progressBar.background}
        fillColor={COLOR_THEME.progressBar.color}
      />
      {/* <BassOverlay audioSrc={audioFileUrl} color={visualizer.color} /> */}
    </div>
  );
};
