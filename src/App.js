import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { dec, inc } from "./redux/actions";

function App() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
