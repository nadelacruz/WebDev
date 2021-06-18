import Part from "./Part";

const Content = (props) => {
  const { name: part1, exercises: exercises1 } = props.part1;
  const { name: part2, exercises: exercises2 } = props.part2;
  const { name: part3, exercises: exercises3 } = props.part3;
  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
};

export default Content;
