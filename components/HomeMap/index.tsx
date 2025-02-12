"use client";
import React, { memo } from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import 'react-tooltip/dist/react-tooltip.css';




const HomeMap = ({ fromPage }) => {
  const mapLoadedPage = fromPage;

  return (
    <>
      <div className="min-h-fit bg-[#0B0A0A] flex flex-col items-center p-6 rounded-xl">
        {mapLoadedPage === 'home' ?
          <><><h3 className="mx-auto mb-4 text-xl text-gray-300 text-center">
            Digital Ecosystem
          </h3><h4 className="mx-auto mb-4 text-3xl text-center text-wrap font-bold text-white dark:text-white">
              Integrating <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">tech for seamless,</span> connected <span className="bg-gradient-to-r from-lime-600 via-emarald-500 to-teal-400 bg-clip-text text-transparent">digital environments</span> around the globe
            </h4></></>
          : ''}
        <div className="w-10/12" data-tooltip-class-name="toolTipLocation">
          <ComposableMap>
            <ZoomableGroup>
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
            </ZoomableGroup>
          </ComposableMap>
        </div>

      </div>
    </>
  );
};

export default memo(HomeMap);
