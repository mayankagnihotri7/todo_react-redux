import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TODO, SELECT_ALL } from "../store/types";

class InputBox extends Component {
  handleAddTodo = ({ target, keyCode }) => {
    if (keyCode === 13) {
      this.props.dispatch({
        type: ADD_TODO,
        payload: target.value,
      });
      target.value = "";
    }
  };

  handleSelectAll = () => {
    this.props.dispatch({ type: SELECT_ALL });
  };

  render() {
    return (
      <>
        <h1>todos</h1>
        <i
          className="fas fa-chevron-down"
          onClick={() => this.handleSelectAll()}
        ></i>
        <input
          type="text"
          placeholder="What needs to be done?"
          className="input"
          onKeyDown={this.handleAddTodo}
        />
      </>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(InputBox);
