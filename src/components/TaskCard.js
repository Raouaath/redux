import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/actions";
import EditTask from "./EditTask";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 id={task.isDone ? "done" : ""}> {task.action} </h1>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={() => dispatch(completeTask(task.id))}>Complete</button>
      <EditTask task={task} />
    </div>
  );
};

export default TaskCard;
