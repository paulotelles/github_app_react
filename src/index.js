import React from "react";
import ReactDOM from "react-dom";
import MainContent from "./components/MainContent";
import "./index.css";
import Header from "./components/Header";
import UserSearchBar from "./components/UserSearchBar";

ReactDOM.render(
  <React.StrictMode>
    <MainContent>
      <Header></Header>
      <UserSearchBar></UserSearchBar>
    </MainContent>
  </React.StrictMode>,
  document.getElementById("root")
);
