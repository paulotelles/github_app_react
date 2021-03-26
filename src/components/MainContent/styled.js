import styled from "styled-components";
import gitImg from "../../img/github.png";

export const StyledMainContent = styled.div`
  margin: 40px 240px;
  position: relative;
  max-width: 60%;

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

  @media screen and (max-width: 959px) {
    margin: 40px 120px;
    max-width: 100%;
  }

  @media screen and (max-width: 639px) {
    margin: 20px 40px;
    max-width: 100%;
  }
`;
