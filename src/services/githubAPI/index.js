import axios from "axios";

export default async function getGithubProfile(userName, callbackGit) {
  let userData = await axios
    .get(`https://api.github.com/users/${userName}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  return callbackGit(userData);
}
