import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div className="container">
    <div>Name: product</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
