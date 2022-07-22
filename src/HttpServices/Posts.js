import http from "./HttpRequests";

const baseUrl = "http://127.0.0.1:5000"
export const GetAllPosts = () => http.get(`${baseUrl}/posts`);
export const GetPostDetailsById = ({ id }) => http.get(`${baseUrl}/posts/${id}`);
export const DeletePostById = ({ id }) => http.delete(`${baseUrl}/posts/${id}`);
export const AddPosts = ({ data }) => http.post(`${baseUrl}/posts`,data);
export const EditPostData = ({ id,data }) => http.put(`${baseUrl}/posts/${id}`,data);
