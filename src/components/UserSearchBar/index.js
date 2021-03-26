import React, { useState } from "react";
import * as S from "./styled";
import getGithubProfile from "../../services/githubAPI";

export default function UserSearchBar({
  returnFilterValue,
  getGithubProfile,
  texto,
}) {
  return (
    <>
      <S.SearchBarTitleArea>
        <S.SearchBarTitle>Explore usuários no Github.</S.SearchBarTitle>
      </S.SearchBarTitleArea>
      <S.SearchBarArea>
        <S.SearchBar
          placeholder="Digite aqui"
          type="text"
          value={texto}
          onChange={returnFilterValue}
        ></S.SearchBar>
        <S.SearchBarButton onClick={getGithubProfile}>
          Pesquisar
        </S.SearchBarButton>
      </S.SearchBarArea>
    </>
  );
}
