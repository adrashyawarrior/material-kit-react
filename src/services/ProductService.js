import http from "./baseURL";

const getAll = () => {
    return http.get("/products");
};
const get = id => {
    return http.get(`/products/${id}`);
};

const ProductService = {
    getAll,
    get,
};
export default ProductService;