import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../redux/actions/utilsActions";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Toast = () => {
  const dispatch = useDispatch();
  const { toast:toastInfo } = useSelector((state) => state.utils);
  const { message, type } = toastInfo || {};

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(showToast(null));
  };

  if (!toastInfo) return null;
  return (
    <Snackbar open={!!toastInfo} autoHideDuration={2500} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={type || "error"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export const Loader = () => {
  return (
    <Box
      m={4}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
