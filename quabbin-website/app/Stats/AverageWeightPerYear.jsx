"use client";

import { ResponsiveLine } from "@nivo/line";

export default function AverageWeightPerYear({ data }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 55, right: 165, bottom: 55, left: 25 }}
      curve="monotoneX"
      colors={{ scheme: "paired" }}
      axisBottom={{
        orient: "bottom",
        // tickSize: 5,
        // tickPadding: 5,
        // tickRotation: 0,
        legend: "Average Weight Of Fish Per Year By Species (Oz)",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      isInteractive={true}
      useMesh={true}
    />
  );
}
