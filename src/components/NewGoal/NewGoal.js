import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  let [enteredText,setEnteredText] = useState("");
  const addGoalHandler = (event) => {
    event.preventDefault();

    const newgoal = {
        id : Math.random.toString(),
        text : enteredText
    }

    setEnteredText('');

    console.log('entered goal  is',newgoal);
    props.onAddGoal(newgoal);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
    console.log(enteredText)
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit"> Add Goal</button>
    </form>
  );
};

export default NewGoal;
