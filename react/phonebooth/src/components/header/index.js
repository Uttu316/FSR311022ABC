import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {pathname} = useLocation()

  const { isLoggedIn } = useSelector((state) => state.auth);

  const showDashbord = !pathname.includes('dashboard') && isLoggedIn

  const showHome = pathname!=="/"


  const onLogin = () => {
    navigate("/login");
  };
  const onHome = ()=>{
    navigate("/");
  }
  const onDashBoard = ()=>{
    navigate("/dashboard");
  }
  const onLogout = ()=>{
    dispatch(logoutUser())
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phone Booth
          </Typography>

          {!isLoggedIn && (
            <Button color="inherit" onClick={onLogin}>
              Login
            </Button>
          )}
          {showHome && (
            <Button color="inherit" onClick={onHome}>
              Home
            </Button>
          )}
          {showDashbord && (
            <Button color="inherit" onClick={onDashBoard}>
              Dashboard
            </Button>
          )}
          {isLoggedIn && (
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
