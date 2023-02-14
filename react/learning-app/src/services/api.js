import {AXIOS} from "./index"

export const getUserList = () => {
  return new Promise((resolve, reject) => {
    AXIOS("/users?page=2")
      .then((res) => {
          if(res.data &&res.status===200){
            resolve(res.data)
          }
      })
      .catch((err) => {
        reject(err)
      });
  });
};


