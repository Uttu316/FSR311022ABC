import { redirect } from "react-router-dom";

const getLSValue = (key) => {
  const value = JSON.parse(localStorage.getItem(key));
  return value;
};

const setLSValue = (key, value) => {
  const stringifyValue =
    typeof value !== "object" ? value : JSON.stringify(value);
  localStorage.setItem(key, stringifyValue);
};

const clearLS = () => {
  localStorage.clear();
};

const isAuth = ({ isProtected }) => {
  const userInfo = getLSValue("user");
  if (isProtected) {
    if (!userInfo) {
      return null;
    } else {
      return redirect("/");
    }
  }
  if (userInfo) {
    return null;
  } else {
    return redirect("/login");
  }
};

export { getLSValue, setLSValue, clearLS, isAuth };
