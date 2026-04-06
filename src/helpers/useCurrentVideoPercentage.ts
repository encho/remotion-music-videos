import { useCurrentFrame, useVideoConfig } from "remotion";

export const useCurrentVideoPercentage = (): number => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // percentage = currentFrame / totalFrames
  const percentage = frame / durationInFrames;

  // clamp between 0 and 1
  return Math.min(Math.max(percentage, 0), 1);
};
