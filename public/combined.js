const axios = require('axios');

const url = new URL(window.location.href);
const id = url.pathname;

window.onload = function () {
  axios.get(`${id}exp/bundle.js`)
  .catch(error => console.log(error));
  axios.get(`${id}reviewsModule/bundle.js`)
  .catch((error) => console.log(error));
  axios.get(`${id}bestNearby/bundle.js`)
  .catch((error) => console.log(error));
  axios.get(`${id}imageMain/bundle.js`)
  .catch((error) => console.log(error));
};




