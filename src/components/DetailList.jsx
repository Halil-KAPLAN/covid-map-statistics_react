import PropTypes from "prop-types";
import { formatDate } from "./helpers/formatDate";
import { formatNumber } from "./helpers/formatNumber";

const DetailList = ({ covidStats }) => {
  const countryName = covidStats[0]?.region?.name || "";

  return (
    <div className="container mx-auto mt-28 md:mt-32 min-h-[600px]">
      <h2 className="text-2xl font-bold mb-2 mx-3 md:mx-0">
        COVID-19 Statistics
      </h2>
      <h2 className="text-2xl font-bold mb-4 mx-3 md:mx-0 text-orange-600">
        Country: <span className="text-black">{countryName}</span>
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 md:mx-0">
        {covidStats.map(
          (
            { region, confirmed, deaths, active, fatality_rate, last_update },
            index
          ) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg ">
              <h3 className="text-xl font-semibold mb-2">{region.province}</h3>
              <p className="text-gray-600">
                <span className="text-black">Last Update Date: </span>
                {formatDate(last_update)}
              </p>
              <p className="text-gray-600">
                <span className="text-green-600">Confirmed Cases: </span>
                {formatNumber(confirmed)}
              </p>
              <p className="text-gray-600">
                <span className="text-blue-600">Active Cases: </span>
                {formatNumber(active)}
              </p>
              <p className="text-gray-600">
                <span className="text-red-600">Deaths: </span>
                {formatNumber(deaths)}
              </p>
              <p className="text-gray-600">
                <span className="text-purple-600">Fatality Rate: </span>
                {(fatality_rate * 100).toFixed(2)}%
              </p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

DetailList.propTypes = {
  covidStats: PropTypes.arrayOf(
    PropTypes.shape({
      region: PropTypes.shape({
        province: PropTypes.string.isRequired,
        name: PropTypes.string,
      }),
      confirmed: PropTypes.number.isRequired,
      deaths: PropTypes.number.isRequired,
      active: PropTypes.number.isRequired,
      fatality_rate: PropTypes.number.isRequired,
      last_update: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DetailList;
