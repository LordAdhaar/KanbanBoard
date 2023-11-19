import './App.css';
import { useState, useEffect } from 'react';
import { Status } from './components/Status';
import { User } from "./components/User"
import { Priority } from './components/Priority';
import { Navbar } from './components/Navbar';

// Importing necessary modules and components

function App() {

  const [data, setData] = useState({})
  const [tickets, setTickets] = useState([])
  const [users, setUsers] = useState([])

  const [showStatus, setShowStatus] = useState(true)
  const [showUser, setShowUser] = useState(false)
  const [showPriority, setShowPriority] = useState(false)

  const [byPriority, setByPriority] = useState(true)
  const [byTitle, setByTitle] = useState(false)

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then( result => {
        setData(result)
        setTickets(result.tickets)
        setUsers(result.users)
        console.log(result)
        console.log(tickets)
        console.log(users)

      });
  }, []); 

  // Set the value of the SETTERS after refreshing the page
  useEffect(() => {

    setShowStatus(JSON.parse(window.localStorage.getItem("SHOW_STATUS_PAGE")))
    setShowUser(JSON.parse(window.localStorage.getItem("SHOW_USER_PAGE")))
    setShowPriority(JSON.parse(window.localStorage.getItem("SHOW_PRIORITY_PAGE")))
    
    setByPriority(JSON.parse(window.localStorage.getItem("SORT_BY_PRIORITY")))
    setByTitle(JSON.parse(window.localStorage.getItem("SORT_BY_TITLE")))
    
    
  }, [])
  
  // Store the value of the states in window.localStorage everytime their value is changed
  useEffect(() => {
    
    window.localStorage.setItem("SHOW_STATUS_PAGE", JSON.stringify(showStatus))
    window.localStorage.setItem("SHOW_USER_PAGE", JSON.stringify(showUser))
    window.localStorage.setItem("SHOW_PRIORITY_PAGE", JSON.stringify(showPriority))

    window.localStorage.setItem("SORT_BY_PRIORITY", JSON.stringify(byPriority))
    window.localStorage.setItem("SORT_BY_TITLE", JSON.stringify(byTitle))

  }, [showStatus, showUser, showPriority, byPriority, byTitle, byPriority, byTitle])
  

  return (
    <div className="App">

      <Navbar setShowStatus={setShowStatus} setShowUser={setShowUser} setShowPriority={setShowPriority} setByPriority={setByPriority} setByTitle={setByTitle}/>

      {showStatus && <Status tickets={tickets} byPriority={byPriority} byTitle={byTitle}/>}
      {showUser && <User users={users} tickets={tickets} byPriority={byPriority} byTitle={byTitle}/>}
      {showPriority && <Priority tickets={tickets} byPriority={byPriority} byTitle={byTitle}/>} 
  
    </div> 
  );
}

export default App;
