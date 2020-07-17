import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Footer;
