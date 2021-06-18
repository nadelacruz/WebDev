const Total = (props) => {
  const { exercises: ex1 } = props.parts[0];
  const { exercises: ex2 } = props.parts[1];
  const { exercises: ex3 } = props.parts[2];
  return <p>Number of exercises {ex1 + ex2 + ex3}</p>;
};

export default Total;
