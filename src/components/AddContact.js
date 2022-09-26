import React from "react";

class AddContact extends React.Component {
  
  
  state = {
    name : "",
    email :"",
    phone :""
  }
  add = (e) =>{
    e.preventDefault();
    if(this.state.name === "" || this.state.email=== "" || this.state.phone ===""){
      alert("All the fields are mandatory !");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"",email:"",phone:""});
  }
  render() {
    return (
      <div className="ui main">
        <h2> Add Contacts</h2>
        <form className="ui form" onSubmit={this.add}>
        <h2> Add Contacts</h2>
          <div className="field">
            <label>Name</label>
            <input 
            type="text" 
            name="name" 
            placeholder="Name"
            value = {this.state.name} 
            onChange ={(e)=> this.setState({name:e.target.value})} />
          </div>
          <div className="field">
            <label>Email</label>
            <input 
            type="text" 
            name="Email" 
            placeholder="Email"
            value = {this.state.email} 
            onChange ={(e)=> this.setState({email:e.target.value})} />
          </div>
          <div className="field">
            <label>Phone</label>
            <input 
            type="text" 
            name="Phone" 
            placeholder="Phone"
            value = {this.state.phone} 
            onChange ={(e)=> this.setState({phone:e.target.value})} />
          </div>
          <button className="ui button green">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
