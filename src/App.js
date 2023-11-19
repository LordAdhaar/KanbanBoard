import './App.css';
import {useState, useEffect} from 'react';
import { Status } from './components/Status';
import {User} from "./components/User"
import { Priority } from './components/Priority';
 
function App() {

  const [data, setData] = useState({"tickets":[{"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},{"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},{"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},{"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},{"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},{"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},{"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},{"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},{"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},{"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}],"users":[{"id":"usr-1","name":"Anoop sharma","available":false},{"id":"usr-2","name":"Yogesh","available":true},{"id":"usr-3","name":"Shankar Kumar","available":true},{"id":"usr-4","name":"Ramesh","available":true},{"id":"usr-5","name":"Suresh","available":true}]})
  const [tickets,setTickets] = useState(data.tickets)
  const [users, setUsers] = useState(data.users)

  const [showStatus, setShowStatus] = useState(true)
  const [showUser, setShowUser] = useState(false)
  const [showPriority, setShowPriority] = useState(false)
 
  const [byPriority, setByPriority] = useState(true)
  const [byTitle, setByTitle] = useState(false)


  function handleStatus(){
    setShowStatus(true)
    setShowUser(false)
    setShowPriority(false)
  }

  function handleUser(){
    setShowStatus(false)
    setShowUser(true)
    setShowPriority(false)
  }
  
  function handlePriority(){
    setShowStatus(false)
    setShowUser(false)
    setShowPriority(true)
  } 

  function handleByPriority(){
    setByPriority(true)
    setByTitle(false)
  }

  function handleByTitle(){
    setByPriority(false)
    setByTitle(true)
  }

  const [display, setDisplay] = useState(false)

  function Grouping(){
    return (
      <div className="grouping">
        <div className='groupingLabel'>
          <p style={{margin:"0px", color:"black", padding:"0px", fontSize:"16px"}}>Grouping</p> 
        </div>
        <div className='groupingButton' style={{display:"flex", flexDirection:"row", gap:"8px"}}>
          <button onClick={handleStatus}>Status</button>
          <button onClick={handleUser}>User</button>
          <button onClick={handlePriority}>Priority</button>
        </div>
        
      </div>
    )
  }

  function SortBy(){
    return (
        <div className="sorting">
          <div className='PriorityLabel'>
            <p style={{margin:"0px", color:"black", padding:"0px", fontSize:"16px"}}>Ordering</p>
          </div>
          <div className='PriorityButton' style={{display:"flex", flexDirection:"row", gap:"8px"}}>
            <button onClick={handleByPriority}>Priority</button>
            <button onClick={handleByTitle}>Title</button>
          </div>
          
        </div>
    )
  }

  function DropDown(){
    return (
      <div style={{display:"flex", flexDirection:"column", gap:"12px"}} className="dropDown">
        {Grouping()}
        {SortBy()}
      </div>
    )
  }

  return (
    <div className="App">
      <div className="navbar" style={{display:"flex", flexDirection:"column", gap:"12px"}}>
          <div>
            <button onClick={()=>{setDisplay(!display)}}>Display</button>
          </div>
            {display && DropDown()}
        </div>


     {/* {showStatus && <Status tickets = {tickets} byPriority = {byPriority} byTitle = {byTitle}/>}
      {showUser && <User users = {users} tickets = {tickets} byPriority = {byPriority} byTitle = {byTitle}/>}
  {showPriority && <Priority tickets = {tickets} byPriority = {byPriority} byTitle = {byTitle}/>} */}
  </div> 
  );
}

export default App;
