import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
      >
       Created by FSR311022ABC Batch with ❤️
      </Typography>
    </Box>
  );
};

export default Footer;
