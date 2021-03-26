import axios from "axios";

export default async function getGithubProfile(userName, callbackGit) {
  await axios
    .get(`https://api.github.com/users/${userName}`)
    .then((response) => {
      if (response.status === 200) {
        return callbackGit(response.data);
      }
    })
    .catch((err) => {
      if (err.response.status === 404)
        return callbackGit({}, "Usuário não encontrado");
      return callbackGit({}, err.message);
    });
}
