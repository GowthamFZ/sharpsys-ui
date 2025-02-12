"use client";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";


import MapChart from "./mapChart";

const RenderMap = ({ renderFrom }) => {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart fromPage={renderFrom} setTooltipContent={setContent} />
      <Tooltip id="my-tooltip">{content}</Tooltip>
    </div>
  );
}

export default RenderMap;
