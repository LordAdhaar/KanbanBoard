import { FaCircle } from "react-icons/fa";
import { FaRegCircle as FaCirc } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import {MdOutlinePendingActions as MdOut} from "react-icons/md";
import { GiCancel as GiCan } from "react-icons/gi";
import { PiCircleHalfFill as PiHalf} from "react-icons/pi";
import { IoCheckmarkCircleSharp as IoCheck} from "react-icons/io5";

export function Priority({tickets, byPriority, byTitle}){

    // Sort tickets by priority if the 'byPriority' flag is true, otherwise sort by title
    if (byPriority){
      tickets.sort((a,b) => a.priority < b.priority ? -1 : 1)
    }
    else{
      tickets.sort((a,b) => a.title < b.title ? -1 : 1)
    }

    // Function to return the appropriate status icon based on the ticket's status
    function returnStatusIcon(status){
      return statusIconMap[status]
    }

    // Function to render a single ticket
    function renderTicket(ticket){
      return (
        <li key={ticket.id} className="ticket" >
            <p className="ticketID">{ticket.id}</p>
            <p className="ticketTitle">{returnStatusIcon(ticket.status)}{ticket.title}</p>
            <div className="ticketDiv">
              <p className="ticketTag"> <FaCircle />{ticket.tag} </p>
            </div>
            
        </li>
      )
    }

    // Map of status icons based on status value
    const statusIconMap = {
      "Backlog": <MdOut style={{color:"black"}} size="20px"/>,
      "Cancelled":<GiCan style={{color:"blue"}}size="20px"/>,
      "Done": <IoCheck style={{color:"blue"}} size="20px"/>,
      "In progress":<PiHalf style={{color:"#ff8900"}} size="20px"/>,
      "Todo":<FaCirc style={{color:"black"}} size="16px"/>
    }

    // Filter tickets based on priority value
    const zero = tickets.filter((ticket) => ticket.priority === 0)
    const one = tickets.filter((ticket) => ticket.priority === 1)
    const two = tickets.filter((ticket) => ticket.priority === 2)
    const three = tickets.filter((ticket) => ticket.priority === 3)
    const four = tickets.filter((ticket) => ticket.priority === 4)

    // Render the filtered tickets for each priority level
    const dispZero = zero.map(ticket => renderTicket(ticket))
    const dispOne = one.map(ticket => renderTicket(ticket))
    const dispTwo = two.map(ticket => renderTicket(ticket))
    const dispThree = three.map(ticket => renderTicket(ticket))
    const dispFour = four.map(ticket => renderTicket(ticket))

    return (
        <div className="PriorityPage">
               
            <div className="Zero">
                <div className="header">
                  <div className="headerLeft">
                    <p>0</p>
                    <h1> No Priority</h1>
                  </div>
                  <div className="headerRight">
                    <FaPlus  style = {{color:"black"}} size="16px"/>
                    <BsThreeDots style={{color:"black"}} size="16px"/>
                  </div>
                </div>
                <ul>
                  {dispZero}
                </ul>
            </div>

            <div className="Four">
                <div className="header">
                  <div className="headerLeft">
                    <p>4</p>
                    <h1>Urgent</h1>
                  </div>
                  <div className="headerRight">
                    <FaPlus  style = {{color:"black"}} size="16px"/>
                    <BsThreeDots style={{color:"black"}} size="16px"/>
                  </div>
                </div>
                <ul>
                  {dispFour}
                </ul>
            </div>

            <div className="Three">
                <div className="header">
                  <div className="headerLeft">
                    <p>3</p>
                    <h1>High</h1>
                  </div>
                  <div className="headerRight">
                    <FaPlus  style = {{color:"black"}} size="16px"/>
                    <BsThreeDots style={{color:"black"}} size="16px"/>
                  </div>
                </div>
                <ul>
                  {dispThree}
                </ul>
            </div>
                        
            <div className="Two">
                <div className="header">
                  <div className="headerLeft">
                    <p>2</p>
                    <h1>Medium</h1>
                  </div>
                  <div className="headerRight">
                    <FaPlus  style = {{color:"black"}} size="16px"/>
                    <BsThreeDots style={{color:"black"}} size="16px"/>
                  </div>
                </div>
                <ul>
                  {dispTwo}
                </ul>
            </div>
            
            <div className="One">
                <div className="header">
                  <div className="headerLeft">
                    <p>1</p>
                    <h1>Low</h1>
                  </div>
                  <div className="headerRight">
                    <FaPlus  style = {{color:"black"}} size="16px"/>
                    <BsThreeDots style={{color:"black"}} size="16px"/>
                  </div>
                </div>
                <ul>
                  {dispOne}
                </ul>
            </div>
            
        </div>
    )
}
