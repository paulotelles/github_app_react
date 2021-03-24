import React from "react";
import bussula from "../../img/bussula.png";
import * as S from "./styled";

export default function Header() {
  return (
    <S.HeaderTitle>
      <img src={bussula} />
      <S.HeaderParagraph>
        github<S.HeaderSpan>_explorer</S.HeaderSpan>
      </S.HeaderParagraph>
    </S.HeaderTitle>
  );
}
