import React, { useEffect, useState } from "react";
import UserSearchBar from "../../components/UserSearchBar";
import Card from "../../components/Card";
import getGithubProfile from "../../services/githubAPI";
import * as S from "./styled";
import { setLocalStorage, getLocalStorage } from "../../helpers/localStorage";
import ErrorMessage from "../../components/ErrorMessage";

export default function SearchUser() {
  const [textFilter, setTextFilter] = useState("");
  const [userData, setUserData] = useState([]);
  const [searchErr, setSearchErr] = useState([]);

  useEffect(() => {
    setUserData([...getLocalStorage("githup_app_react_last_search")]);
  }, []);

  useEffect(() => {
    setLocalStorage(userData);
  }, [userData]);

  useEffect(() => {
    setTimeout(() => {
      setSearchErr([]);
    }, 10000);
  }, [searchErr]);

  function funcaoRetornaValor(filterValue) {
    setTextFilter(filterValue);
  }

  function setGitUser({ avatar_url, name, login, bio, repos_url }, err) {
    if (err) return setSearchErr([...searchErr, err]);
    const verifyUser = userData.filter((user) => user.login !== login);
    setUserData([{ avatar_url, name, login, bio, repos_url }, ...verifyUser]);
    return setTextFilter("");
  }

  return (
    <>
      <UserSearchBar
        returnFilterValue={(event) => funcaoRetornaValor(event.target.value)}
        getGithubProfile={(event) => getGithubProfile(textFilter, setGitUser)}
        texto={textFilter}
      />
      {searchErr.map((item, index) => {
        return <ErrorMessage key={index} message={item} />;
      })}
      <S.CardArea>
        {userData.map((item, index) => {
          return (
            <Card
              key={index}
              imgSource={item.avatar_url}
              name={item.name}
              description={item.bio}
            />
          );
        })}
      </S.CardArea>
    </>
  );
}
