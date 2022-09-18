import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  let contacts = [
    {
      id : "1",
      name : "Anuj Patel",
      email : "anujpatel224@gmail.com",
      phone : "+919873707647"
    },
    {
      id : "2",
      name : "Anuj Patel",
      email : "anujpatel224@gmail.com",
      phone : "+919873707647"
    },
    {
      id : "3",
      name : "Anuj Patel",
      email : "anujpatel224@gmail.com",
      phone : "+919873707647"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
