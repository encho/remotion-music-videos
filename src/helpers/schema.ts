// import { zColor } from "@remotion/zod-types";
import { zColor } from "@remotion/zod-types";
import { z } from "zod";

const baseVisualizerSchema = z.object({
  bassOverlay: z.boolean().default(true),
  // color: zColor().default("#0b84f3"),
});

const spectrumVisualizerSchema = baseVisualizerSchema.extend({
  type: z.literal("spectrum"),
  linesToDisplay: z.number().int().min(0).default(65),
  mirrorWave: z.boolean(),
  numberOfSamples: z
    .enum(["32", "64", "128", "256", "512", "1024"])
    .default("512"),
});

const waveformVisualizerSchema = baseVisualizerSchema.extend({
  type: z.literal("oscilloscope"),
  windowInSeconds: z.number().min(0.1).default(1),
  amplitude: z.number().min(0.1).default(1.3),
});

const visualizerSchema = z.discriminatedUnion("type", [
  spectrumVisualizerSchema,
  waveformVisualizerSchema,
]);

const SongSchema = z.object({
  songName: z.string(),
  songAuthor: z.string(),
  durationInSeconds: z.number().nonnegative(),
});

export const SongsArraySchema = z.array(SongSchema);

export type TSong = z.infer<typeof SongSchema>;
export type TSongs = z.infer<typeof SongsArraySchema>;

export const visualizerCompositionSchema = z.object({
  // visualizer settings
  visualizer: visualizerSchema,
  // song data
  coverImageUrl: z.string(),
  // audio settings
  audioFileUrl: z.string(),
  audioOffsetInSeconds: z.number().min(0),
  activeIndex: z.number(),
});

export type AudiogramCompositionSchemaType = z.infer<
  typeof visualizerCompositionSchema
>;

// WideSingleSong

export const wideSingleSongCompositionSchema = z.object({
  // visualizer settings
  visualizer: visualizerSchema,
  // song data
  coverImageUrl: z.string(),
  // colors
  backgroundColor: zColor(),
  progressBarBackgroundColor: zColor(),
  progressBarColor: zColor(),
  shadowColor: zColor(),
  waveColor: zColor(),
  artistColor: zColor(),
  songNameColor: zColor(),
  durationColor: zColor(),
  albumNameColor: zColor(),
  //
  songNr: z.string(),
  songName: z.string(),
  songArtist: z.string(),
  songDurationInSeconds: z.number(),
  // audio settings
  audioFileUrl: z.string(),
  audioOffsetInSeconds: z.number().min(0),
});

export type WideSingleSongCompositionSchemaType = z.infer<
  typeof wideSingleSongCompositionSchema
>;
