import * as axios from 'axios'

export const usersAPI = {
    getUsers(page, pageSize) {
        return axios.get(`/users?page=${page}&count=${pageSize}`).then(res => { return res.data })
    },
    followUser(id) { return axios.post(`/follow?id=${id}`).then(res => { return res.data }) }
}
export const authAPI = {
    login() { return axios.get(`/auth`).then(res => { return res.data }) },
    checkAuth() { return axios.get(`/auth/me`).then(res => { return res.data }) }
}
export const profileAPI = {
    setProfile(url) {
        return axios.get(`/profile${url}`).then(res => {
            return res.data;
        })
    }
}