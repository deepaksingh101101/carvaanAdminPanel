import axios from "axios"
// import accessToken from "./jwt-token-access/accessToken"

//pass new generated access token here
// const token = accessToken

//apply base url for axios
// const API_URL = "https://8495-103-16-69-135.ngrok-free.app"
const API_URL = "http://35.200.249.150:3000/"

const axiosApi = axios.create({
  baseURL: API_URL,
})


// axiosApi.defaults.headers.common["Authorization"] = token;

axiosApi.interceptors.request.use((config) => {
  let authUser = JSON.parse(localStorage.getItem("authUser"));
  config.headers["source"] = `IS_ADMIN_RELATED`;

  // console.log({authUser});
  if(authUser){
    config.headers["Authorization"] = `Bearer ${authUser.accessToken}`;
    config.headers.cookies = `token=${authUser.refreshToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export function post(url, data, config = {}) {
  return axiosApi
    .post(url, data, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}
export async function patch(url, data, config = {}) {
  return axiosApi
    .patch(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
