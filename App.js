import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, "Hello h1");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
