import { loadFont, fontFamily } from "@remotion/google-fonts/IBMPlexSans";
// import { loadFont, fontFamily } from "@remotion/google-fonts/Inter";

export const THIN_FONT_WEIGHT = "400" as const;
export const MEDIUM_FONT_WEIGHT = "500" as const;
export const BOLD_FONT_WEIGHT = "700" as const;

const font = loadFont("normal", {
  weights: [THIN_FONT_WEIGHT, MEDIUM_FONT_WEIGHT, BOLD_FONT_WEIGHT],
});

export const FONT_FAMILY = fontFamily;

export const waitForFonts = () => {
  return font.waitUntilDone();
};
