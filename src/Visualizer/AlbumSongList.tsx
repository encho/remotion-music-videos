import { z } from "zod";
import { SongsArraySchema } from "../helpers/schema";
// import { BOLD_FONT_WEIGHT, MEDIUM_FONT_WEIGHT } from "../helpers/font";
import {
  // ALBUM_TITLE_COLOR,
  // ALBUM_INFO_FONT_COLOR,
  // ALBUM_INFO_FONT_SIZE,
  // ALBUM_INFO_FONT_WEIGHT,
  // ALBUM_INFO_MARGIN_BOTTOM,
  // ALBUM_TITLE_FONT_SIZE,
  // ALBUM_TITLE_LETTER_SPACING,
  // ALBUM_TITLE_MARGIN_BOTTOM,
  // ARTIST_NAME_COLOR,
  // ARTIST_NAME_FONT_WEIGHT,
  // ARTIST_NAME_FONTSIZE,
  // ARTIST_NAME_LETTER_SPACING,
  // HEADER_MARGIN_BOTTOM,
  SONG_ITEM_PADDING_HORIZONTAL,
  SONG_ITEM_PADDING_VERTICAL,
} from "../helpers/styles";

import { SongsList } from "./SongsList";

export type TSongs = z.infer<typeof SongsArraySchema>;

export const AlbumSongList: React.FC<{
  activeIndex: number;
  songs: TSongs;
}> = ({ songs, activeIndex }) => {
  const PADDING_HORIZONTAL = SONG_ITEM_PADDING_HORIZONTAL;
  const PADDING_VERTICAL = SONG_ITEM_PADDING_VERTICAL;

  return (
    <div
      className="flex flex-col"
      style={{
        paddingLeft: 23,
        paddingRight: 23,
        paddingTop: 23,
        paddingBottom: 23,
      }}
    >
      <SongsList
        songs={songs}
        activeSongIndex={activeIndex}
        paddingHorizontal={PADDING_HORIZONTAL}
        paddingVertical={PADDING_VERTICAL}
      />
    </div>
  );
};
