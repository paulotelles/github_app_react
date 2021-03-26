import React from "react";
import * as S from "./styled";

export default function ErrorMessage({ message }) {
  return (
    <S.ErrorMsg>
      <S.ErrorText>{message}</S.ErrorText>
    </S.ErrorMsg>
  );
}
