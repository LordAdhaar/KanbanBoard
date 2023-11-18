export function Priority({tickets}){
    console.log(tickets)

    const zero = tickets.filter((ticket) => ticket.priority === 0)
    const one = tickets.filter((ticket) => ticket.priority === 1)
    const two = tickets.filter((ticket) => ticket.priority === 2)
    const three = tickets.filter((ticket) => ticket.priority === 3)
    const four = tickets.filter((ticket) => ticket.priority === 4)

    const dispZero = zero.map(ticket => {
        return (
          <li key={ticket.id} className="ticket" >
            <p>{ticket.id}</p>
            <p>{ticket.title}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.tag}</p>
          </li>
        )
    })

    const dispOne = one.map(ticket => {
        return (
          <li key={ticket.id} className="ticket" >
            <p>{ticket.id}</p>
            <p>{ticket.title}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.tag}</p>
          </li>
        )
    })

    const dispTwo = two.map(ticket => {
        return (
          <li key={ticket.id} className="ticket" >
            <p>{ticket.id}</p>
            <p>{ticket.title}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.tag}</p>
          </li>
        )
    })

    const dispThree = three.map(ticket => {
        return (
          <li key={ticket.id} className="ticket" >
            <p>{ticket.id}</p>
            <p>{ticket.title}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.tag}</p>
          </li>
        )
    })

    const dispFour = four.map(ticket => {
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
        <div className="PriorityPage">
            
            <ul className="Zero">
                <h1>Zero</h1>
                {dispZero}
            </ul>
            
            <ul className="One">
                <h1>One</h1>
                {dispOne}
            </ul>
            
            <ul className="Two">
                <h1>Two</h1>
                {dispTwo}
            </ul>
            
            <ul className="Three">
                <h1>Three</h1>
                {dispThree}
            </ul>

            <ul className="Four">
                <h1>Four</h1>
                {dispFour}
            </ul>
        </div>
    )


}