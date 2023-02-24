import React, { Component } from "react";
import { IconButton, Badge } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ContactsButton extends Component {
  constructor(props) {
    super(props);
  }
  goToContacts = () => {};

  render() {
    const { count } = this.props;
    return (
      <Badge badgeContent={count} showZero={true} color="secondary">
        <Link to={"/contacts"}>
          <IconButton>
            <ListAltIcon sx={{ color: "white" }} />
          </IconButton>
        </Link>
      </Badge>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state || {};
  const { contactedUser } = user || {};
  const count = (contactedUser || []).length;

  return {
    count,
  };
};
export default connect(mapStateToProps)(ContactsButton);
