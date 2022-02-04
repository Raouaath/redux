import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state);
  console.log(tasks);
  return (
    <div>
      {!filter ? (
        <div>
          {tasks.map((el) => (
            <TaskCard task={el} />
          ))}
        </div>
      ) : (
        <div>
          {tasks
            .filter((tsk) => tsk.isDone)
            .map((el) => (
              <TaskCard task={el} />
            ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
