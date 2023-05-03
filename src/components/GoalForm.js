import React, { useRef } from "react";
const GoalForm = ({ setAllGoals }) => {
  const goalRef = useRef();
  const byRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllGoals((goals) => {
      return [
        ...goals,
        <li key={goals.length + 1}>
          My goal is to {goalRef.current.value}, by {byRef.current.value}.
        </li>,
      ];
    });
    goalRef.current.value = "";
    byRef.current.value = "";
  };

  return (
    <>
      <h1>My Goals</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="goal" placeholder="Goal..." ref={goalRef} />
        <input type="text" name="by" placeholder="By..." ref={byRef} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default GoalForm;
