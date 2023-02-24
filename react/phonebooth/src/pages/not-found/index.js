import { Button, Typography } from "@mui/material";
import React, { memo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h1" component={"h1"} color={"seagreen"}>
        Oops! Wrong Path
      </Typography>
      <h2>Not Found- 404</h2>
      <Button
        sx={{ marginTop: 8 }}
        variant="contained"
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
