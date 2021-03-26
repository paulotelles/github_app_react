import React from "react";
import * as S from "./styled";

export default function Card({ imgSource, name, description }) {
  return (
    <S.StyledCard>
      <S.StyledCardMainArea>
        <S.StyledCardImage src={imgSource} />
        <S.StyledCardTextArea>
          <S.StyledCardTitle>{name}</S.StyledCardTitle>
          <S.StyledCardParagraph>{description}</S.StyledCardParagraph>
        </S.StyledCardTextArea>
      </S.StyledCardMainArea>
      <S.StyledCardButtonArea>
        <S.StyledCardNButton />
      </S.StyledCardButtonArea>
    </S.StyledCard>
  );
}
