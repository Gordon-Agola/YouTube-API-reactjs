//import Video from "./video";
//react router, reach router
import React from "react";
import ReactDOM from "react-dom";
import SearchArea from "./SearchArea";
import { Router } from "@reach/router";
import WatchArea from "./WatchArea";
const App = () => {
  return (
    <div>
      <header>
        <a href="/"> WeTube </a>{" "}
      </header>{" "}
      <Router>
        <SearchArea path="/" />
        <WatchArea path="/watch/:id" />
      </Router>{" "}
    </div>
  );
  // return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "wetube"),
  //React.createElement(Video, {
  //         title: "The Best Video in youtube",
  //         dateAdded: "4 days ago",
  //         channel: "News Channel",
  //     }),
  //     React.createElement(Video, {
  //         title: "The Cool Video in youtube",
  //         dateAdded: "12 days ago",
  //         channel: "Local Channel",
  //     }),
  //     React.createElement(Video, {
  //         title: "The best video in youtube",
  //         dateAdded: "5 days ago",
  //         channel: "Learning Channel",
  //     }),
  //]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
