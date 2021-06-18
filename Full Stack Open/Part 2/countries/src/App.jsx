import { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import SearchCountries from "./components/SearchCountries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  const convertWhiteSpace = (text) => text.split(" ").join("%20");
  const handleSearchTextChange = (event) => setSearchText(event.target.value);

  useEffect(() => {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${convertWhiteSpace(searchText)}`
      )
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  }, [searchText]);

  return (
    <div>
      <SearchCountries
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
      <CountryList countries={countries} />
    </div>
  );
};

export default App;
