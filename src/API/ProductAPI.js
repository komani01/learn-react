import axiosClient from './AxiosClient';

const ProductApi = {
    getAll(params) {
        const url = '/products';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/products';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/products/${data.id}`;
        return axiosClient.post(url, data);
    },
    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
};

export default ProductApi;
