import { useCurrentFrame, useVideoConfig } from "remotion";

export const useCurrentVideoTime = (): number => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Convert frame → seconds
  const timeInSeconds = frame / fps;

  return timeInSeconds;
};
