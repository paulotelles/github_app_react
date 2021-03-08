import React from "react";
import ReactDOM from "react-dom";
import MainContent from "./components/MainContent";
import "./index.css";
import Header from "./components/Header";
import UserSearchBar from "./components/UserSearchBar";
import CardArea from "./components/CardArea";

ReactDOM.render(
  <React.StrictMode>
    <MainContent>
      <Header></Header>
      <UserSearchBar></UserSearchBar>
      <CardArea></CardArea>
    </MainContent>
  </React.StrictMode>,
  document.getElementById("root")
);
