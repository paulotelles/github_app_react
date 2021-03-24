import React, { useEffect, useState } from "react";
import UserSearchBar from "../../components/UserSearchBar";
import Card from "../../components/Card";
import getGithubProfile from "../../services/githubAPI";
import * as S from "./styled";
import { setLocalStorage, getLocalStorage } from "../../services/localStorage";

export default function SearchUser() {
  const [textFilter, setTextFilter] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData([...getLocalStorage()]);
  }, []);

  useEffect(() => {
    setLocalStorage(userData);
  }, [userData]);

  function funcaoRetornaValor(filterValue) {
    setTextFilter(filterValue);
  }

  function setGitUser({ avatar_url, name, login, bio, repos_url }) {
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
