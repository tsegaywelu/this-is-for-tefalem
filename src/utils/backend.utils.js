import axios from "axios";

// const URL = "http://localhost:3000"
const URL = "http://10.14.30.195:2300"

const API_SERVICE = axios.create({
    baseURL: URL,
})

export const login = (email, password)=>{
    return API_SERVICE.post('/admin/login', {email, password})
}

export const createStudent = (student)=>{
    const token = localStorage.getItem('token')
    return API_SERVICE.post('/create', {student}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateStudent = (id, student)=>{
    const token = localStorage.getItem('token')
    return API_SERVICE.put(`/${id}`, student, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteStudent = (id)=>{
    const token = localStorage.getItem('token')
    return API_SERVICE.delete(`/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const upload = (formData)=>{
    const token = localStorage.getItem('token')
    return API_SERVICE.post('/uploads', formData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}