import React, { Component } from "react";
import {
  ALL_TODO,
  ACTIVE_TODO,
  COMPLETED_TODO,
  CLEAR_COMPLETED,
} from "../store/types";
import { connect } from "react-redux";

class Footer extends Component {
  handleClear = () => {
    this.props.dispatch({ type: CLEAR_COMPLETED });
  };

  handleChange = (newTab) => {
    this.props.dispatch({ type: "change", payload: newTab });
  };

  render() {
    let filteredTodo = this.props.todo.filter((todo) => !todo.completed).length;
    return (
      <>
        <footer className="footer">
          <div className="main_flex">
            <span className="itemsLeft">{`${filteredTodo} items left`}</span>
            <ul className="sub_flex">
              <li className="all">
                <button onClick={() => this.handleChange(ALL_TODO)}>All</button>
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
      </>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(Footer);
