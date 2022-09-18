import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2> Add Contacts</h2>
        <form className="ui form">
        <h2> Add Contacts</h2>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" id="email" name="Email" placeholder="Email" />
          </div>
          <div className="field">
            <label>Phone</label>
            <input type="text" id="phone" name="Phone" placeholder="Phone" />
          </div>
          <button className="ui button green">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
