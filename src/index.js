import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function cdate() {
  ReactDOM.render(<App date={new date()} />, document.getElementById("root"));
}
setInterval(cdate, 1000);
