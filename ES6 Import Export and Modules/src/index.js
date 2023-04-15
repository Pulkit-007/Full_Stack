import React from "react";
import ReactDOM from "react-dom";
//import pi,{doublePi,triplePi} from "./math"
import * as pi from "./math"; //* means import everything in math.js as pi
console.log(pi);
// ReactDOM.render(
//   <ul>
//     <li>{pi}</li>
//     <li>{doublePi()}</li>
//     <li>{triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
