import {
  ADD,
  COMPLETE,
  DECREMENT,
  DELETE,
  EDIT,
  FILTER,
  INCREMENT,
} from "./actionTypes";

const initialState = {
  count: 0,
  tasks: [
    { id: Math.random(), action: "Checkpoint Redux", isDone: true },
    { id: Math.random(), action: "Checkpoint React Router", isDone: true },
    { id: Math.random(), action: "I can't anymore!", isDone: false },
  ],
  filter: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload),
      };
    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el) => (el.id === payload.id ? payload : el)),
      };
    case FILTER:
      return {
        ...state,
        filter: !state.filter,
      };
    default:
      return state;
  }
};

export default reducer;
