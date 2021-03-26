import styled from "styled-components";

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 100px;
  @media screen and (max-width: 639px) {
    margin-bottom: 30px;
  }
`;

export const HeaderParagraph = styled.p`
  color: #737380;
`;

export const HeaderSpan = styled.span`
  color: #a8a8b3;
`;
