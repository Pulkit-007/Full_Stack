import React from "react";
import ReactDOM from "react-dom";
const Fname = "Pulkit";
const Lname = "Sharma";
const num = 69;
//ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

ReactDOM.render(
  <div>
    <h1>Hello {Fname + " " + Lname} !</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
