
import style from "./TaskList.module.css";
import Task from "./Task";
const TaskList = (props) => {
 
  return (
    <div className={style.taskListContainer}>
      <div className={style.todo}>
        <h2>
          <span>{props.status}</span>
        </h2>
        {props.addTask.map(
          (opt, index) =>
            opt.optValue == props.status && (
              <Task
                key={index}
                addPara={opt.paraTask}
                btnArray={opt.btnValue}
                index={index}
                task={props.addTask}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TaskList;
