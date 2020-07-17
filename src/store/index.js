import { createStore } from "redux";
import uuid from "react-uuid";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./types";

const initialState = {
  todo: [{ text: "Hello React", completed: false, id: uuid() }],
  activeTab: "All",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            text: action.text,
            completed: false,
            id: uuid(),
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        todo: state.todo.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    case REMOVE_TODO:
      return {
        todo: state.todo.filter((todo) => todo.id !== action.id),
      };

    default:
      return state;
  }
}

export let store = createStore(reducer);
