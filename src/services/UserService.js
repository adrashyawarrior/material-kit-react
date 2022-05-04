import http from "./baseURL";

const getAll = () => http.get("/users");

const get = id => http.get(`/users/${id}`);

const create = data => http.post("/users", data);

const update = (id, data) => http.put(`/users/${id}`, data);

const remove = id => http.delete(`/users/${id}`);

const removeAll = () => http.delete(`/users`);

const findByName = name => http.get(`/users?name=${name}`);

const UserService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByName,
};
export default UserService;