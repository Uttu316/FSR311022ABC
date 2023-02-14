import axios  from "axios";

// axios.defaults.baseURL='https://reqres.in/api'
// axios.defaults.timeout=5000
// axios.defaults.headers.Authorization = localStorage.getItem('token')

export const AXIOS = axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
  })

