import React from "react";
import { useCurrentVideoPercentage } from "../helpers/useCurrentVideoPercentage";
// import { PROGRESS_BAR_HEIGHT } from "../helpers/styles";

export const ProgressBar: React.FC<{
  backgroundColor?: string;
  fillColor?: string;
}> = ({
  backgroundColor = "rgba(255, 255, 255, 0.2)",
  fillColor = "#ffffff",
}) => {
  const percentage = useCurrentVideoPercentage();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          // position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // height: PROGRESS_BAR_HEIGHT,
          backgroundColor,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percentage * 100}%`,
            backgroundColor: fillColor,
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </div>
  );
};
