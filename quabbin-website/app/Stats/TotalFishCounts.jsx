"use client";

import { ResponsivePie } from "@nivo/pie";

export default function TotalFishCounts({ data }) {
  return (
    <ResponsivePie
      data={data}
      colors={{ scheme: "paired" }}
      margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
      borderWidth={3}
      borderColor={{ theme: "background" }}
    />
  );
}
