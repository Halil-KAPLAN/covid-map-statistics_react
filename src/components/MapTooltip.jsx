import PropTypes from "prop-types";

const MapTooltip = ({ hoveredCountry, tooltipPosition }) => {
  return (
    <>
      {hoveredCountry && (
        <div
          className="absolute bg-stone-800 rounded-md p-1 text-xs text-white"
          style={{
            top: tooltipPosition.y + 10,
            left: tooltipPosition.x + 10,
          }}
        >
          {hoveredCountry}
        </div>
      )}
    </>
  );
};

MapTooltip.propTypes = {
  hoveredCountry: PropTypes.string,
  tooltipPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

export default MapTooltip;
