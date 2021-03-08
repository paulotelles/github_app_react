import React from "react";
import styled from "styled-components";

export default function UserSearchBar() {
  const SearchBarTitleArea = styled.div`
    margin-top: 100px;
    width: 360px;
  `;

  const SearchBarTitle = styled.h1`
    color: #3a3a3a;
    font-size: 48px;
    font-weight: bold;
  `;

  const SearchBar = styled.input`
    font-size: 20px;
    padding: 25px 29px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 500px;
  `;

  const SearchBarButton = styled.button`
    background: #04d361;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    padding: 25px 64px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `;

  return (
    <>
      <SearchBarTitleArea>
        <SearchBarTitle>Explore usuários no Github.</SearchBarTitle>
      </SearchBarTitleArea>
      <div>
        <SearchBar placeholder="Digite Aqui"></SearchBar>
        <SearchBarButton>Pesquisar</SearchBarButton>
      </div>
    </>
  );
}
