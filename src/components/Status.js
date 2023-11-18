export function Status({tickets}){
    const backlogTickets = tickets.filter((ticket) => ticket.status === "Backlog")
    const cancelledTickets = tickets.filter((ticket) => ticket.status === "Cancelled")
    const doneTickets = tickets.filter((ticket) => ticket.status === "Done")
    const inProgTickets = tickets.filter((ticket) => ticket.status === "In progress")
    const todoTickets = tickets.filter((ticket) => ticket.status === "Todo")
    
    const dispBackTickets = backlogTickets.map(ticket => {
        return (
          <li key={ticket.id} className="ticket" >
            <p>{ticket.id}</p>
            <p>{ticket.title}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.tag}</p>
          </li>
        )
    })
    
    const dispTodoTickets = todoTickets.map(ticket => {
        return (
          <li key={ticket.id} className="ticket" >
            <p>{ticket.id}</p>
            <p>{ticket.title}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.tag}</p>
          </li>
        )
    })
    
    const dispInProgTickets = inProgTickets.map(ticket => {
        return (
          <li key={ticket.id} className="ticket" >
            <p>{ticket.id}</p>
            <p>{ticket.title}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.tag}</p>
          </li>
        )
    })

    return (
        <div className="StatusPage">
            
            <ul className="Backlog">
                <h1>Backlog</h1>
                {dispBackTickets}
            </ul>
            
            <ul className="Cancelled">
                <h1>Cancelled</h1>
            </ul>
            
            <ul className="Done">
                <h1>Done</h1>
            </ul>
            
            <ul className="inProgress">
                <h1>In Progress</h1>
                {dispInProgTickets}
            </ul>

            <ul className="ToDo">
                <h1>ToDo</h1>
                {dispTodoTickets}
            </ul>
        </div>
    )
}