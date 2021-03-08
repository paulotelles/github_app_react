import React from "react";
import styled from "styled-components";
import gitImg from "../../img/github.png";

const StyledMainContent = styled.div`
  margin: 40px 240px;
  font-family: "Roboto", sans-serif;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    background: url(${gitImg});
    width: 688px;
    height: 688px;
    right: 0;
    top: -40px;
    z-index: -1;
  }
`;

export default function MainContent({ children }) {
  return <StyledMainContent>{children}</StyledMainContent>;
}
