import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  ALL_TODO,
  ACTIVE_TODO,
  COMPLETED_TODO,
  CLEAR_COMPLETED,
} from "./store/types";
import uuid from "react-uuid";

class App extends Component {
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

  handleClear = () => {
    this.props.dispatch({ type: CLEAR_COMPLETED });
  };

  handleChange = (newTab) => {
    this.props.dispatch({ type: "change", payload: newTab });
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
    let filteredTodo = this.props.todo.filter((todo) => !todo.completed).length;
    return (
      <div>
        <div className="text-centre">
          <h1>todos</h1>
          <i className="fas fa-chevron-down"></i>
          <input
            type="text"
            placeholder="What needs to be done?"
            className="input"
            onKeyDown={this.handleAddTodo}
          />

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

          <footer className="footer">
            <div className="main_flex">
              <span className="itemsLeft">{`${filteredTodo} items left`}</span>
              <ul className="sub_flex">
                <li className="all">
                  <button onClick={() => this.handleChange(ALL_TODO)}>
                    All
                  </button>
                </li>
                <li className="active">
                  <button onClick={() => this.handleChange(ACTIVE_TODO)}>
                    Active
                  </button>
                </li>
                <li className="completed">
                  <button onClick={() => this.handleChange(COMPLETED_TODO)}>
                    Completed
                  </button>
                </li>
              </ul>
              <button className="clear" onClick={() => this.handleClear()}>
                Clear Completed
              </button>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(App);
