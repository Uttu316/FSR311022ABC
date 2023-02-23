import React, { useCallback, useEffect, useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton, CardActionArea, CardActions } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const UserCard = (props) => {
  const { userDetails } = props;

  const {
    avatar,
    email,
    id: userId,
    first_name,
    last_name,
  } = userDetails || {};

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={avatar}
          alt={first_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {first_name + " " + last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton color="inherit">
          <ContactMailIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
