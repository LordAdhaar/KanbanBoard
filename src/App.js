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

  const [showStatus, setShowStatus] = useState(true)
  const [showUser, setShowUser] = useState(false)
  const [showPriority, setShowPriority] = useState(false)

  const [byPriority, setByPriority] = useState(true)
  const [byTitle, setByTitle] = useState(false)

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
