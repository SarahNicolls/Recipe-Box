import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: "Avenir Next", sans-serif;
    margin: 0;
  }
`;

ReactDOM.render(<Router />, document.getElementById("root"));
