import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { PiCircleHalfFill } from "react-icons/pi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { render } from "@testing-library/react";

export function Status({tickets, byPriority, byTitle}){
    
    // Sort tickets by priority if the 'byPriority' flag is true, otherwise sort by title
    if (byPriority){
      tickets.sort((a,b) => a.priority < b.priority ? -1 : 1)
    }
    else{
      tickets.sort((a,b) => a.title < b.title ? -1 : 1)
    }

    // Render individual ticket components
    function renderTicket(ticket){
      return (
        <li key={ticket.id} className="ticket" >
            <p className="ticketID">{ticket.id}</p>
            <p className="ticketTitle">{ticket.title}</p>
            <div className="ticketDiv">
              <p className="ticketPri">{ticket.priority}</p>
              <p className="ticketTag"> <FaCircle/> {ticket.tag} </p>
            </div>
          </li>
      )
    }

    // Filter tickets based on their status
    const backlogTickets = tickets.filter((ticket) => ticket.status === "Backlog")
    const cancelledTickets = tickets.filter((ticket) => ticket.status === "Cancelled")
    const doneTickets = tickets.filter((ticket) => ticket.status === "Done")
    const inProgTickets = tickets.filter((ticket) => ticket.status === "In progress")
    const todoTickets = tickets.filter((ticket) => ticket.status === "Todo")

    // Render the filtered tickets
    const dispBackTickets = backlogTickets.map(ticket => renderTicket(ticket))
    const dispTodoTickets = todoTickets.map(ticket => renderTicket(ticket))
    const dispInProgTickets = inProgTickets.map(ticket => renderTicket(ticket))
    const dispDoneTickets = doneTickets.map(ticket => renderTicket(ticket))
    const dispCancelledTickets = cancelledTickets.map(ticket => renderTicket(ticket))

    return (
        <div className="StatusPage">
            
          <div className="Backlog">
            <div className="header">
              
              <div className="headerleft">
                <MdOutlinePendingActions style={{color:"black"}} size="20px"/>
                <h1>Backlog</h1>  
              </div>

              <div className="headerRight">
                <FaPlus  style = {{color:"black"}} size="16px"/>
                <BsThreeDots style={{color:"black"}} size="16px"/>

              </div>
            </div>
            <ul>
                {dispBackTickets}
            </ul>
          </div>
            
          <div className="ToDo">
            <div className="header">
              <div className="headerleft">
                <FaRegCircle style = {{color:"black"}} size="20px"/>
                <h1>ToDo</h1>
              </div>
              
              <div className="headerRight">
                <FaPlus  style = {{color:"black"} } size="16px" />
                <BsThreeDots style={{color:"black"}} size="16px"/>
              </div>
            </div>
            <ul>
                {dispTodoTickets}
            </ul>
          </div>
            
          <div className="Done">
            <div className="header">
              <div className="headerleft">
                <IoCheckmarkCircleSharp style={{color:"blue"}} size="20px"/>
                <h1>Done</h1>
              </div>
             
              <div className="headerRight">
                <FaPlus  style = {{color:"black"} } size="16px"/>
                <BsThreeDots style={{color:"black"}} size="16px"/>
              </div>
            </div>
            <ul>
              {dispDoneTickets}
            </ul>
          </div>
            
          <div className="inProgress">
            <div className="header">
              <div className="headerleft">              
                <PiCircleHalfFill style={{color:"#ff8900"}} size="20px"/>
                <h1>In Progress</h1>
              </div>
              <div className="headerRight">
                <FaPlus  style = {{color:"black"} } size="16px"/>
                <BsThreeDots style={{color:"black"}} size="16px"/>
              </div>

            </div>
            <ul>
                {dispInProgTickets}
            </ul>
          </div>
            
          <div className="Cancelled">
            <div className="header">
              <div className="headerleft">
                <GiCancel style={{color:"black"}} size="20px"/>
                <h1>Cancelled</h1>
              </div>
                
             <div className="headerRight">
                <FaPlus  style = {{color:"black"} } size="16px"/>
                <BsThreeDots style={{color:"black"}} size="16px"/>
              </div>

            </div>
            <ul>
              {dispCancelledTickets}
            </ul>
          </div>

        </div>
    )
}
