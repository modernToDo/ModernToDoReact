import { useState, useEffect } from "react";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import { TbTargetArrow } from "react-icons/tb";
import { GiStarFormation } from "react-icons/gi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import "./App.css"

const App = () => {
  const [task, setTask] = useState(() => {
    const parsedItem = JSON.parse(localStorage.getItem("your task"));
   return parsedItem ?  JSON.parse(localStorage.getItem("your task")): []  
 } );
  
 useEffect(() => {
   localStorage.setItem("your task", JSON.stringify(task));
 }, [task]);
  
  const setTaskObj = (value) => {
    setTask((prev) => [...prev, value]);
  };
  return (
    <>
      <AddTask setTask={setTaskObj} />
      <main className="main">
      <TaskList addTask={task} status="To do" icon={<TbTargetArrow />} />
      <TaskList addTask={task} status="Doing" icon={<GiStarFormation />} />
      <TaskList
        addTask={task}
        status="Done"
        icon={<IoCheckmarkDoneCircleSharp />}
        />
      </main>
    </>
  );
};

export default App;
