import axios from "./customize-axios";

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`)
}
const postCreateUsers = (name, job) => {
    return axios.post("/api/users", { name, job })
}
const putUpdatetUser = (id, name, job) => {
    return axios.put("/api/users/${id}", { name, job })
}
export { fetchAllUser, postCreateUsers, putUpdatetUser };