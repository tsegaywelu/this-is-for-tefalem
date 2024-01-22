import axios from "axios";

const URL = "http://10.14.30.228:2300"
// const URL = "http://10.14.30.195:2300"

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

export const updateStudent = (student)=>{
    const token = localStorage.getItem('token')
    return API_SERVICE.put(`/${student.id}`, student, {
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

export const fetchStudent = (id)=>{
    // const token = localStorage.getItem('token')
    return API_SERVICE.get(`/single/${id}`, {
        // headers: {
        //     Authorization: `Bearer ${token}`
        // }
    })
}
export const sendContact=(contact)=>{
    return API_SERVICE.post("/contact",contact)
}
export const getEvents=()=>{
    return API_SERVICE.get('/admin/getevents')
}