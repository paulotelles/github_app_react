import React from "react";
import styled from "styled-components";

export default function UserSearchBar() {
  const SearchBarTitleArea = styled.div`
    margin-top: 100px;
    max-width: 360px;
    @media screen and (max-width: 639px) {
      margin-top: 50px;
    }
  `;

  const SearchBarTitle = styled.h1`
    color: #3a3a3a;
    font-size: 48px;
    font-weight: bold;
    @media screen and (max-width: 639px) {
      font-size: 32px;
      text-align: center;
    }
  `;

  const SearchBar = styled.input`
    font-size: 20px;
    padding: 25px 29px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-family: "Roboto", sans-serif;
    flex-grow: 2;
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 639px) {
      padding: 10px;
      width: 100%;
      font-size: 16px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  `;

  const SearchBarButton = styled.button`
    font-family: "Roboto", sans-serif;
    background: #04d361;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    padding: 25px 64px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    max-width: 210px;
    cursor: pointer;
    @media screen and (max-width: 639px) {
      font-size: 15px;
      padding: 12px 32px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  `;

  const SearchBarArea = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 639px) {
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }
  `;

  return (
    <>
      <SearchBarTitleArea>
        <SearchBarTitle>Explore usuários no Github.</SearchBarTitle>
      </SearchBarTitleArea>
      <SearchBarArea>
        <SearchBar placeholder="Digite aqui"></SearchBar>
        <SearchBarButton>Pesquisar</SearchBarButton>
      </SearchBarArea>
    </>
  );
}
