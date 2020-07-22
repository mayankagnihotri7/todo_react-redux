import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  ACTIVE_TODO,
  COMPLETED_TODO,
} from "../store/types";

class TodoList extends Component {
  handleAddTodo = ({ target, keyCode }) => {
    if (keyCode === 13) {
      this.props.dispatch({
        type: ADD_TODO,
        payload: target.value,
      });
      target.value = "";
    }
  };

  handleToggle = (id) => {
    this.props.dispatch({ type: TOGGLE_TODO, payload: id });
  };

  handleDelete = (id) => {
    this.props.dispatch({ type: REMOVE_TODO, payload: id });
  };

  getFilteredTodo = (todos, active) => {
    switch (active) {
      case ACTIVE_TODO:
        return todos.filter((todo) => !todo.completed);
      case COMPLETED_TODO:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  render() {
    var todos =
      this.getFilteredTodo(this.props.todo, this.props.activeTab) || [];
    return (
      <div className="text-centre">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={uuid()}>
                <input
                  type="checkbox"
                  onClick={() => this.handleToggle(todo.id)}
                  defaultChecked={todo.completed}
                />
                <p>{todo.text}</p>
                <span onClick={() => this.handleDelete(todo.id)}>x</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(TodoList);
