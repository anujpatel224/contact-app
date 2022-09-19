import React from "react";
import user from "../images/user.png";
const Contact = (props) => {
    const {id, name, email, phone} = props.contact;
    return (
        <div className="item">
          <img className="ui avatar image" src={user} alt="user" />
          <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <div>{phone}</div>
          </div>
          <i
            className="trash alternate outline icon"
            style={{ color: "red", float:"right"}}
            onClick={() => props.clickHander(id)}
          ></i>
        </div>
      );
    };

 
export default Contact;