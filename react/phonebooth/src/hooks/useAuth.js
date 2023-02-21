import * as LocalStorage from "../utils/localstorage";
import { useState, useEffect } from "react";

const useAuth = ({ isPrivate, isProtected }) => {
  const [isAuth, setIsAuth] = useState(true);
  const checkAuth = () => {
    const userInfo = LocalStorage.getLSValue("user");
    if (isPrivate) {
      if (userInfo) {
        return true;
      }
      return false;
    }
    if (isProtected) {
      if (!userInfo) {
        return true;
      }
      return false;
    }
    return true;
  };

  useEffect(() => {
    const isAuthorised = checkAuth();
    setIsAuth(isAuthorised);
  }, [isPrivate, isProtected]);

  return isAuth;
};

export default useAuth;
