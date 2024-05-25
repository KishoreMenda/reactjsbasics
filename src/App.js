import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  const [courseGoals, setcourseGoals] = useState([
    { id1: "cg1", text: "Finish the Course" },
    { id1: "cg2", text: "Learn all about the Course main topic" },
    { id1: "cg3", text: "Help other students in the course" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setcourseGoals(courseGoals.concat(newGoal));
    //prevCourseGoals - latest state and update this
    setcourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
    console.log(courseGoals);
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
