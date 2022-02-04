import {
  ADD,
  COMPLETE,
  DECREMENT,
  DELETE,
  EDIT,
  FILTER,
  INCREMENT,
} from "./actionTypes";

// these functions are called action creators, they return the action
// objects
export const inc = () => {
  return {
    type: INCREMENT,
  };
};

export const dec = () => {
  return {
    type: DECREMENT,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const completeTask = (id) => {
  return {
    type: COMPLETE,
    payload: id,
  };
};

export const addTask = (newTask) => {
  return {
    type: ADD,
    payload: newTask,
  };
};

export const editTask = (editedTask) => {
  return {
    type: EDIT,
    payload: editedTask,
  };
};

export const filterTask = () => {
  return {
    type: FILTER,
  };
};
