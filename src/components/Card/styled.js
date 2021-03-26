import styled from "styled-components";
import rightArrow from "../../img/rightarrow.png";

export const StyledCard = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  transition: 0.5s ease all;
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const StyledCardMainArea = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const StyledCardTextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCardTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #3d3d4d;
  @media screen and (max-width: 639px) {
    font-size: 16px;
  }
`;

export const StyledCardParagraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #a8a8b3;
  margin-top: 4px;
  @media screen and (max-width: 639px) {
    font-size: 12px;
    overflow: hidden;
    max-height: 30px;
  }
`;

export const StyledCardButtonArea = styled.div`
  width: 50px;
  height: 50px;
`;

export const StyledCardNButton = styled.button`
  background: url(${rightArrow}) center no-repeat;
  border: none;
  width: 50px;
  height: 50px;
`;

export const StyledCardImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  @media screen and (max-width: 639px) {
    width: 40px;
    height: 40px;
  }
`;
