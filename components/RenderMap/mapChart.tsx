import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const markers = [
  { markerOffset: -30, name: "India", coordinates: [78.9629, 20.5937], flagImg: "/images/maps/India.png" },
  { markerOffset: 15, name: "Australia", coordinates: [133.7751, -25.2744], flagImg: "/images/maps/Australia.png" },
  { markerOffset: 15, name: "Indonesia", coordinates: [113.9213, -0.7893], flagImg: "/images/maps/Indonesia.png" },
  { markerOffset: 15, name: "Turkey", coordinates: [103.8198, 1.3521], flagImg: "/images/maps/Turkey.png" },
  { markerOffset: 15, name: "UAE", coordinates: [53.8478, 23.4241], flagImg: "/images/maps/UAE.png" },
  { markerOffset: 15, name: "South Africa", coordinates: [22.9375, -30.5595], flagImg: "/images/maps/SouthAfrica.png" },
  { markerOffset: -30, name: "England", coordinates: [1.1743, 52.3555], flagImg: "/images/maps/UnitedKingdom.png" },
  { markerOffset: -30, name: "USA", coordinates: [-106.5348, 38.7946], flagImg: "/images/maps/USA.png" }
];


const MapChart = ({ fromPage, setTooltipContent }) => {
  return (
    <div className="min-h-fit bg-[#0B0A0A] flex flex-col items-center p-6 rounded-xl">
      {fromPage === 'home' ?
        <><><h3 className="mx-auto mb-4 text-xl text-gray-300 text-center">
          Digital Ecosystem
        </h3><h4 className="mx-auto mb-4 text-3xl text-center text-wrap font-bold text-white dark:text-white">
            Integrating <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">tech for seamless,</span> connected <span className="bg-gradient-to-r from-lime-600 via-emarald-500 to-teal-400 bg-clip-text text-transparent">digital environments</span> around the globe
          </h4></></>
        : ''}
      <div className="w-10/12">
        <ComposableMap>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E4E4E4" stroke="#E4E4E4"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}

                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset, flagImg }) => (
            <Marker key={name} coordinates={coordinates}
              onMouseEnter={() => {
                setTooltipContent(`${name}`);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
            >
              <g
                fill="none"
                stroke="#FF5533"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-22, -32)"
              >
                <image href={flagImg} height={32} width={32} data-tooltip-id="my-tooltip" className="locationPointer" />
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default memo(MapChart);
