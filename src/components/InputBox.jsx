import React, { Component } from "react";

class InputBox extends Component {
  render() {
    return (
      <>
        <i className="fas fa-chevron-down"></i>
        <input
          type="text"
          placeholder="What needs to be done?"
          className="input"
        />
      </>
    );
  }
}

export default InputBox;
