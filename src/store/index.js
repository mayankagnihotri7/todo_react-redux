import { createStore, combineReducers } from "redux";
import uuid from "react-uuid";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_COMPLETED } from "./types";

const initialState = {
  todo: [{ text: "Hello React", completed: false, payload: uuid() }],
  activeTab: "All",
};

function reducer(state = initialState.todo, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
          id: uuid(),
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
}

function activeTabReducer(state = initialState.activeTab, action) {
  switch (action.type) {
    case "change":
      return action.payload;

    default:
      return state;
  }
}

let rootReducer = combineReducers({
  todo: reducer,
  activeTab: activeTabReducer,
});

export let store = createStore(rootReducer);
