import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";
import MapTooltip from "./MapTooltip";
import { mapStyle } from "./helpers/mapStyle";
import countriesGeo from "../data/countriesGeo.json";

const WorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [centerValue, setCenterValue] = useState([20, 0]);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1024) {
        setCenterValue([20, -10]);
      } else if (screenWidth > 768) {
        setCenterValue([20, 0]);
      } else {
        setCenterValue([20, 15]);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (geo, { clientX, clientY }) => {
    setHoveredCountry(geo.properties.name);
    setTooltipPosition({ x: clientX, y: clientY });
  };
  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };
  const handleCountryClick = ({ id }) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="min-h-[700px]">
      <ComposableMap>
        <ZoomableGroup center={centerValue}>
          <Geographies geography={countriesGeo}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(svgEl) => handleMouseEnter(geo, svgEl)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleCountryClick(geo)}
                  style={mapStyle}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <MapTooltip
        hoveredCountry={hoveredCountry}
        tooltipPosition={tooltipPosition}
      />
    </div>
  );
};

export default WorldMap;
