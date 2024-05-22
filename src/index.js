import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import TestRating from "./TestRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}/>
    <StarRating color="red" size="24"/>
    <TestRating color="blue" size="32"/>
  </React.StrictMode>
);
