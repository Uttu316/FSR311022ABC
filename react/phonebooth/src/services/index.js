import axios from 'axios'
import { BASE_URL } from './constant'

export const AXIOS = axios.create({
  baseURL: BASE_URL
})
