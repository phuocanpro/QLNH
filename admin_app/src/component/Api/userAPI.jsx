import axiosClient from "./axiosClient";

const userAPI = {
  // getAPI: (query) => {
  //     const url = `/admin/user${query}`
  //     return axiosClient.get(url)
  // },
  getAllUsers: (query) => {
    const url = `/api/getAll${query}`;
    return axiosClient.get(url);
  },
  details: (id) => {
    const url = `/admin/user/${id}`;
    return axiosClient.get(url);
  },
  login: (data) => {
    const url = `/api/login`;
    return axiosClient.post(url, data);
  },
  loginNV: (data) => {
    const url = `/admin/user/loginnv`;
    return axiosClient.post(url, data);
  },
  create: (data) => {
    const url = `/api/register/`;
    return axiosClient.post(url, data);
  },
  update: (query) => {
    const url = `/admin/user/update${query}`;
    return axiosClient.patch(url);
  },
  delete: (query) => {
    const url = `/admin/user/delete${query}`;
    return axiosClient.delete(url);
  },
};

export default userAPI;
