import { AXIOS } from "."
import { END_POINTS } from "./constant"





export const getUserDetails = async () => {
    try {
      const res = await AXIOS.get(END_POINTS.userList)
      return res.data
    } catch (err) {
      console.log(err)
      throw err
    }
  }