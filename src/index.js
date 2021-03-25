import React from "react";
import ReactDOM from "react-dom";
import MainContent from "./components/MainContent";
import "./index.css";
import Header from "./components/Header";

import SearchUser from "./pages/SearchUser";

ReactDOM.render(
  <React.StrictMode>
    <MainContent>
      <Header />
      <SearchUser />
    </MainContent>
  </React.StrictMode>,
  document.getElementById("root")
);
