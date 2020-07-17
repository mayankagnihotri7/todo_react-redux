import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./store/types";
import uuid from "react-uuid";

class App extends Component {
  handleAddTodo = ({ target, keyCode }) => {
    if (keyCode === 13) {
      this.props.dispatch({
        type: ADD_TODO,
        text: target.value,
      });
      target.value = "";
    }
  };

  handleToggle = (id) => {
    this.props.dispatch({ type: TOGGLE_TODO, id });
  };

  handleDelete = (id) => {
    this.props.dispatch({ type: REMOVE_TODO, id });
  };

  render() {
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
              {this.props.todo.map((todo) => {
                return (
                  <li key={uuid()}>
                    <input
                      type="checkbox"
                      onClick={() => this.handleToggle(todo.id)}
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
              <span className="itemsLeft">items left</span>
              <ul className="sub_flex">
                <li className="all">
                  <button>All</button>
                </li>
                <li className="active">
                  <button>Active</button>
                </li>
                <li className="completed">
                  <button>Completed</button>
                </li>
              </ul>
              <button className="clear">Clear Completed</button>
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
