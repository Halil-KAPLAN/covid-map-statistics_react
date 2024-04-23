import PropTypes from "prop-types";

const Error = ({ errorMsg }) => {
  return (
    <div className="container mx-auto mt-8 p-4 bg-red-100 text-red-800 rounded-md">
      Error: {errorMsg}
    </div>
  );
};

Error.propTypes = {
  errorMsg: PropTypes.string,
};

export default Error;
