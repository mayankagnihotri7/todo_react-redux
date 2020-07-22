import React, { Component } from "react";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import InputBox from "./components/InputBox";

class App extends Component {
  render() {
    return (
      <div>
        <div className="text-centre">
          <InputBox />

          <TodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
