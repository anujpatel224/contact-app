import React, {useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    
  },[contacts])

  const addContactHandler = (contact)=>{
      setContacts([...contacts,contact]);
      console.log(contacts);
  }

  const getContactId =(id) =>{
    contacts.splice(contacts.findIndex((i)=>{
      return i.id === id;
  }), 1)
  console.log(contacts);
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
