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
      instance.get(`/photos/${id}`),
    ])
    .then(
      axios.spread((post, user, photo) => {
        return {
          name: user.data.name,
          company: user.data.company.name,
          title: post.data.title,
          body: post.data.body,
          photo: photo.data.url,
          id: id,
        };
      })
    );
};

// getUserData(5).then((response) => console.log(response));

export default getUserData;
