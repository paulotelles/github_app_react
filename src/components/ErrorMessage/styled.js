import styled from "styled-components";

export const ErrorMsg = styled.div`
  margin-top: 50px;
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  border: 1px solid transpayarrent;
  border-radius: 5px;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  color: #721c24;
  @media screen and (max-width: 639px) {
    font-size: 12px;
  }
`;
