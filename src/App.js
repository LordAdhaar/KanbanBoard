import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState({"tickets":[{"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},{"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},{"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},{"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},{"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},{"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},{"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},{"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},{"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},{"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}],"users":[{"id":"usr-1","name":"Anoop sharma","available":false},{"id":"usr-2","name":"Yogesh","available":true},{"id":"usr-3","name":"Shankar Kumar","available":true},{"id":"usr-4","name":"Ramesh","available":true},{"id":"usr-5","name":"Suresh","available":true}]})
  const [tickets,setTickets] = useState(data.tickets)
  const [users, setUsers] = useState(data.users)

  console.log(data)

  const dispTickets = tickets.map(ticket => {
    return (
      <li key={ticket.id} className="ticket" >
        <p>{ticket.id}</p>
        <p>{ticket.title}</p>
        <p>{ticket.priority}</p>
        <p>{ticket.tag}</p>
      </li>
    )
  })

  function sortByStatus(){
    console.log(tickets)
  }

  return (
    <div className="App">
      <div className="navbar">
            <div className="grouping">
                <button onClick={sortByStatus}>Status</button>
                <button>User</button>
                <button>Priority</button>
            </div>
            <div className="priority">
                <button>Priority</button>
                <button>Title</button>
            </div>
        </div>
      <ul>
        {dispTickets}
      </ul>
    </div>
  );
}

export default App;
