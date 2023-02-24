import { IconButton } from "@mui/material";
import React, { Component } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { contactUser, removeUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";

class MailButton extends Component {
  constructor(props) {
    super(props);
  }

  checkIsPresent =()=>{
    const {contactedUser,user}  = this.props;
    const isPresent = (contactedUser||[]).find(i=>i.id===user.id)
    return isPresent
  }
  onContact = () => {
    const { dispatch, user } = this.props;
    const isPresent = this.checkIsPresent()
    if(isPresent){
        dispatch(removeUser(user))
    }else{
        dispatch(contactUser(user));
    }
  };

  render() {
    const isPresent = this.checkIsPresent();
    return (
      <IconButton color={isPresent?"secondary":"inherit"} onClick={this.onContact}>
        <ContactMailIcon />
      </IconButton>
    );
  }
}

//getStateFromStoreToConvertInProps
const mapStateToProps = (state) => {
    const { user } = state || {};
    const { contactedUser } = user || {};
  return {
    contactedUser
  };
};
//getDispatchFromStore
const mapDispatchToProps = (dispatch) => {
  return {
    sendMail: (user) => dispatch(contactUser(user)),
  };
};

export default connect(mapStateToProps)(MailButton);

/// If want to dispatch an Action, we need dispatch function.

// dispatch(contactUser(this.props.user))
// useSelect((state)=>state.utils)
