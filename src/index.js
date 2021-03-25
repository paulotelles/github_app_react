import React from "react";
import ReactDOM from "react-dom";
import MainContent from "./components/MainContent";
import "./index.css";
import Header from "./components/Header";
import SearchUser from "./pages/SearchUser";
import GlobalStyle from "./globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainContent>
      <Header />
      <SearchUser />
    </MainContent>
  </React.StrictMode>,
  document.getElementById("root")
);
