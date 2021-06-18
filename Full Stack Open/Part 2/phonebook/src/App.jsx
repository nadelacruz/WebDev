import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNameTextboxChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberTextboxChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchTextboxChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkIfNameIsFound = persons.find(
      (person) => person.name === newName
    );
    if (checkIfNameIsFound === undefined) {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    } else {
      // eslint-disable-next-line no-alert
      alert(`${checkIfNameIsFound.name} is already added to the phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchText={searchText}
        handleSearchTextboxChange={handleSearchTextboxChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleNameTextboxChange={handleNameTextboxChange}
        handleNumberTextboxChange={handleNumberTextboxChange}
      />
      <h3>Numbers</h3>
      <Persons actualPersons={persons} actualSearchText={searchText} />
    </div>
  );
};

export default App;
