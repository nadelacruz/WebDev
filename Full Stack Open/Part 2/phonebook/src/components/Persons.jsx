import PropTypes from "prop-types";

const Persons = ({ actualPersons, actualSearchText }) => {
  const PersonsWith = (persons, text) =>
    persons.filter((person) => person.name.includes(text));

  return (
    <div>
      {PersonsWith(actualPersons, actualSearchText).map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

Persons.propTypes = {
  actualPersons: PropTypes.array.isRequired,
  actualSearchText: PropTypes.string.isRequired,
};

export default Persons;
