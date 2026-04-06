import { useWindowedAudioData, visualizeAudio } from "@remotion/media-utils";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { useAverageLowFrequency } from "../helpers/useAverageLowFrequency";

interface BassOverlayProps {
  audioSrc: string;
  color: string;
}

export const BassOverlay: React.FC<BassOverlayProps> = ({
  audioSrc,
  color,
}) => {
  // Get average of low frequencies to determine flash intensity
  const avgLowFreq = useAverageLowFrequency({ audioSrc });

  // Scale the opacity based on low frequency intensity
  const opacity = Math.min(0.5, avgLowFreq * 4);

  console.log({ opacity });

  return (
    <AbsoluteFill
      style={{
        opacity,
      }}
    >
      <AbsoluteFill
        style={{
          backgroundColor: color,
        }}
      />
    </AbsoluteFill>
  );
};
