import React from "react";
import { Navigate, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ isPrivate, isProtected, element:Element }) => {
   const isAuth = useAuth({ isProtected, isPrivate });
   const isPublic = !isProtected && !isPrivate;

  return (
    <React.Fragment>
      {isAuth && isPrivate && <Element />}
      {!isAuth && isPrivate && <Navigate to="/login" replace={true} />}
      {isAuth && isProtected && <Element />}
      {!isAuth && isProtected && <Navigate to={'/'} replace={true} />}
      {isPublic && <Element />}
    </React.Fragment>
  );
};



export default PrivateRoute;
