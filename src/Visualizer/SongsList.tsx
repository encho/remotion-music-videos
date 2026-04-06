import React from "react";
import { SongRow } from "./SongRow";
import type { TSongs } from "../helpers/schema";
import { SONGS_LIST_GAP } from "../helpers/styles";

type SongsListProps = {
  songs: TSongs;
  activeSongIndex?: number; // highlight this index
  paddingHorizontal: number; // uniform padding
  paddingVertical: number; // uniform padding
};

export const SongsList: React.FC<SongsListProps> = ({
  songs,
  activeSongIndex = 5, // default: none active
  paddingHorizontal,
  paddingVertical,
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: SONGS_LIST_GAP }}
    >
      {songs.map((song, i) => (
        <SongRow
          key={i}
          song={song}
          paddingHorizontal={paddingHorizontal}
          paddingVertical={paddingVertical}
          isActive={i === activeSongIndex}
        />
      ))}
    </div>
  );
};
