import React, { useCallback, useEffect, useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton, CardActionArea, CardActions } from "@mui/material";
import MailButton from "../ContactsButton/mailButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from '@mui/icons-material/Delete';

const UserCard = (props) => {
  const {
    userDetails,
    hideMailButton,
    showDeleteButton,
    selectUser,
    selectedUsers,
  } = props;

  const {
    avatar,
    email,
    id: userId,
    first_name,
    last_name,
  } = userDetails || {};

  const onSelectuser = () => {
    if (selectedUsers[userId]) {
      const newUsers = { ...selectedUsers };
      delete newUsers[userId];
      selectUser(newUsers);
      return;
    } else {
      const newUsers = { ...selectedUsers };
      newUsers[userId] = true;
      selectUser(newUsers);
    }
  };
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
        {!hideMailButton && <MailButton user={userDetails} />}
        {showDeleteButton && (
          <IconButton onClick={onSelectuser}>
            {!selectedUsers[userId]&& <DeleteOutlineIcon />}
            {selectedUsers[userId]&& <DeleteIcon color="secondary"  />}
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default UserCard;
