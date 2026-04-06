import { ReactElement } from "react";
import { Img } from "remotion";
import { ALBUM_BORDER_RADIUS } from "../helpers/styles";
import { useAverageLowFrequency } from "../helpers/useAverageLowFrequency";

type AlbumCoverProps = {
  imageUrl: string;
  audioSrc: string;
  shadowColor: string;
  zoomFactor?: number;
  soundVisualizationEl: ReactElement;
};

export const AlbumCover: React.FC<AlbumCoverProps> = ({
  imageUrl,
  audioSrc,
  zoomFactor = 0.4,
  shadowColor,
  soundVisualizationEl,
}) => {
  const avgLowFreq = useAverageLowFrequency({ audioSrc });
  const zoom = Math.max(1, 1 + avgLowFreq * zoomFactor);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          borderRadius: ALBUM_BORDER_RADIUS,
          //
          border: "2px solid rgba(255, 255, 255, 0.2)", // subtle light border
          boxShadow: `
          ${zoom * 10}px ${zoom * 15}px 80px ${shadowColor}
        `,
          transform: `scale(${zoom})`,
          // transform: `scale(${2})`,
        }}
      >
        <Img
          src={imageUrl}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="flex justify-center items-center w-5/6"
            style={{
              marginTop: 70,
            }}
          >
            {soundVisualizationEl}
          </div>
        </div>
      </div>
    </div>
  );
};

// <div
//   style={{
//     width: "auto",      // fill parent’s width
//     height: "100%",     // height adjusts automatically
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: ALBUM_BORDER_RADIUS,
//     overflow: "hidden",
//     position: "relative"
//   }}
// >
//   <Img
//     src={imageUrl}
//     className="transform"
//     style={{
//       width: "auto",
//       height: "100%",      // preserve aspect ratio
//     //   objectFit: "contain", // no cropping, maintain full image
//       objectFit: "cover", // no cropping, maintain full image
//       zoom: 0.5,
//     }}
//   />
// </div>
