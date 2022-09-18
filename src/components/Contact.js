import React from "react";
const Contact = (props) => {
    const {name, email, phone} = props.contact;
    return (
        <div className="item">
          {/* <img className="ui avatar image" src={user} alt="user" /> */}
          <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
          </div>
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px" }}
            // onClick={() => props.clickHander(id)}
          ></i>
        </div>
      );
    };

 
export default Contact;