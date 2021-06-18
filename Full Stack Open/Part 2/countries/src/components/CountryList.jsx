import PropTypes from "prop-types";

const CountryList = ({ countries }) => (
  <div>
    {countries.length <= 10 ? (
      <div>less than or equal to ten</div>
    ) : (
      <div>more than ten</div>
    )}
  </div>
);

CountryList.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default CountryList;
