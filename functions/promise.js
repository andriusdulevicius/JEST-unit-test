const axios = require('axios');

const getUser = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users/2')
    .then((resp) => resp.data)
    .catch((err) => console.log(err.message));
};
//fetch is not defined in node
//we are useing axios instead
console.log(getUser().then((data) => console.log(data)));

module.exports = { getUser };
