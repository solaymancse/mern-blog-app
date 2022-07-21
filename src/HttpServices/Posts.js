import http from "./HttpRequests";

const baseUrl = "http://127.0.0.1:5000"
export const GetAllPosts = () => http.get(`${baseUrl}/posts`);
export const GetPostDetailsById = ({ id }) => http.get(`${baseUrl}/posts/${id}`);
