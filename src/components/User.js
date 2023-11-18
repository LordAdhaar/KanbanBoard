import { FaCircle } from "react-icons/fa";
import { FaRegCircle as FaCirc } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import {MdOutlinePendingActions as MdOut} from "react-icons/md";
import { GiCancel as GiCan } from "react-icons/gi";
import { PiCircleHalfFill as PiHalf} from "react-icons/pi";
import { IoCheckmarkCircleSharp as IoCheck} from "react-icons/io5";

export function User({users, tickets, byPriority, byTitle}){
    console.log(users, tickets)

    if (byPriority){
        tickets.sort((a,b) => a.priority < b.priority ? -1 : 1)
    }
    else{
        tickets.sort((a,b) => a.title < b.title ? -1 : 1)
    }

    function returnStatusIcon(status){
        return statusIconMap[status]
    }
    const statusIconMap = {
        "Backlog": <MdOut style={{color:"black"}} size="20px"/>,
        "Cancelled":<GiCan style={{color:"black"}}size="20px"/>,
        "Done": <IoCheck style={{color:"blue"}} size="20px"/>,
        "In progress":<PiHalf style={{color:"#ff8900"}} size="20px"/>,
        "Todo":<FaCirc style={{color:"black"}} size="16px"/>

    }

    function renderTicket(ticket){
        return (
            <li key={ticket.id} className="ticket" >
            <p className="ticketID">{ticket.id}</p>
            <p className="ticketTitle">{returnStatusIcon(ticket.status)} {ticket.title}</p>
            <div className="ticketDiv">
                <p className="ticketPri">{ticket.priority}</p>
                <p className="ticketTag"> <FaCircle />{ticket.tag}</p>
            </div>
        </li>
        )
      }

    const dispUsers = users.map(user => {
        return (
            <li key={user.id}>
                <p className="userName">
                    {user.name}
                    <div className="userActions">
                        <FaPlus  style = {{color:"black"}} size="16px"/>
                        <BsThreeDots style={{color:"black"}} size="16px"/>
                    </div>                    
                </p>    
                <ul className="userTickets">
                    {tickets.map(ticket => {
                        if (user.id === ticket.userId) {
                            return renderTicket(ticket)
                        }
                        return null
                        
                    })}
                </ul>
            </li>
        )
    })



    return (
        <div >
            <ul className="UserPage">
                {dispUsers}
            </ul>
        </div>
    )

}