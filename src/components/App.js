import React, {useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
const {v4 } = require('uuid');


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || []));

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts])

  const addContactHandler = (contact)=>{
      setContacts([...contacts, {id: v4(),...contact}]);
  }

  const getContactId =(id) =>{
    contacts.splice(contacts.findIndex((i)=>{
      return i.id === id;
  }), 1)
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList 
      contacts = {contacts}
      getContactId={getContactId}/>
    </div>
  );
}

export default App;
