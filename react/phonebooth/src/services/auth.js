import { AXIOS } from '.'
import { END_POINTS } from './constant'

export const login = data => {
  return AXIOS.post(END_POINTS.login, data)
}

export const signUp = async data => {
  try {
    const res = await AXIOS.post(END_POINTS.signup, data)
    return res.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

//async await
//promise Callback Hell
//intro Private Rounting
