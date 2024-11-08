import style from "./TaskList.module.css";
import { MdDeleteForever } from "react-icons/md";

const Task = (props) => {
  const handleDelete = (e) => {
    e.target.closest(`.${style.task}`).remove();
    const remainedItems = props.task.filter((_, i) => i !== props.index);
    localStorage.setItem("your task", JSON.stringify(remainedItems));
    window.location.reload();
  };
  return (
    <div className={style.task}>
      <p key={props.addPara}>{props.addPara}</p>
      <div className={style.btnDelete}>
        <div className={style.courseBtn}>
          {props.btnArray.map((btn, index) => (
            <button key={index}>{btn}</button>
          ))}
        </div>
        <MdDeleteForever onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Task;
