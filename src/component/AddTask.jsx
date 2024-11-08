import { useState, useReducer } from "react";
import styles from "./AddTask.module.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "click":
      return {
        ...state,
        btnValue: [...new Set([...state.btnValue, action.event])],
      };
    case "change":
    case "option":
      const { name, value } = action.event;
      return { ...state, [name]: value };
    case "add":
      action.set;
      return {
        ...state,
        btnValue: [],
      };
    default:
      console.log("type is not defined.");
  }
};
const initialState = { paraTask: "", btnValue: [], optValue: "To do" };
const AddTask = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let courses = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <div className={styles.addTaskContainer}>
      <input
        type="text"
        name="paraTask"
        value={state.paraTask}
        placeholder="Enter your task"
        onChange={(e) => dispatch({ type: "change", event: e.target })}
      />
      <div className={styles.btns}>
        <div className={styles.courses}>
          {courses.map((btn, index) => (
            <button
              key={index}
              onClick={(e) =>
                dispatch({ type: "click", event: e.target.innerText })
              }
            >
              {btn}
            </button>
          ))}
        </div>
        <div className={styles.statusBtn}>
          <select
            onChange={(e) => dispatch({ type: "option", event: e.target })}
            name="optValue"
            value={state.optValue}
          >
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
          <button
            onClick={() => dispatch({ type: "add", set: props.setTask(state) })}
          >
            + Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
