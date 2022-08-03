import { randomNumber } from "./../components/utils/randomNumber";

const axios = require("axios");

const instance = axios.create({
  withCredentials: false,
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getUserData = async (id) => {
  return axios
    .all([
      instance.get(`/posts/${id}`),
      instance.get(`/users/${id}`),
      instance.get(`albums/${id}/photos?${randomNumber(1, 50)}`),
    ])
    .then(
      axios.spread((post, user, photo) => {
        console.log(`albums/${id}/photos?id=${randomNumber(1, 50)}`);
        return {
          name: user.data.name,
          company: user.data.company.name,
          title: post.data.title,
          body: post.data.body,
          photo: photo.data[0].url,
          id: id,
        };
      })
    );
};

export const getAuthUser = async () => {
  return axios
    .get("https://mockend.com/KolesnikovAndrew/kanalservice/users/14")
    .then((response) => response.data);
};

export default { getUserData, getAuthUser };
