export function User({users, tickets}){
    console.log(users, tickets)

    const dispUsers = users.map(user => {
        return (
            <li key={user.id}>{user.name}
                <ul>
                    {tickets.map(ticket => {
                        if (user.id === ticket.userId) {
                            return (
                                <li key={ticket.id} className="ticket" >
                                    <p>{ticket.id}</p>
                                    <p>{ticket.title}</p>
                                    <p>{ticket.priority}</p>
                                    <p>{ticket.tag}</p>
                                </li>
                            )
                        }
                        return null
                        
                    })}
                </ul>
            </li>
        )
    })



    return (
        <div className="UsersPage">
            <ul>
                {dispUsers}
            </ul>
        </div>
    )

}