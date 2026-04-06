import { useCurrentFrame, useVideoConfig } from "remotion";
import { useWindowedAudioData, visualizeAudio } from "@remotion/media-utils";

type UseAverageLowFrequencyParams = {
  audioSrc: string;
  windowInSeconds?: number;
  numberOfSamples?: number;
  lowFrequencyBins?: number;
};

export const useAverageLowFrequency = ({
  audioSrc,
  windowInSeconds = 30,
  numberOfSamples = 128,
  lowFrequencyBins = 32,
}: UseAverageLowFrequencyParams): number  => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { audioData, dataOffsetInSeconds } = useWindowedAudioData({
    src: audioSrc,
    frame,
    fps,
    windowInSeconds,
  });

  if (!audioData) {
    return 0;
  }

  const values = visualizeAudio({
    audioData,
    fps,
    frame,
    optimizeFor: "speed",
    numberOfSamples,
    dataOffsetInSeconds,
  });

  const lowFrequencyValues = values.slice(0, lowFrequencyBins);

  const averageLowFreq =
    lowFrequencyValues.reduce((sum, v) => sum + v, 0) /
    lowFrequencyValues.length;

  return averageLowFreq;
};
