import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, filterTask } from "../redux/actions";

const AddTask = () => {
  const { filter } = useSelector((state) => state);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (newText) => {
    const newTask = {
      id: Math.random(),
      action: newText,
      isDone: false,
    };
    dispatch(addTask(newTask));
    setText("");
  };

  return (
    <div>
      <h1>Another One 😭</h1>
      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleAdd(text)}>Add Task</button>
      <button onClick={() => dispatch(filterTask())}>
        {" "}
        {filter ? "all" : "filter"}{" "}
      </button>
    </div>
  );
};

export default AddTask;
