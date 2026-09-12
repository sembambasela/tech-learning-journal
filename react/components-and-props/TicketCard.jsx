
function TicketCard(props) {
    return (
       <div>
           <h1>{props.title}</h1>
           <p>Description: {props.description}</p>
           <p>Priority: {props.priority}</p>
           <p>Status: {props.status}</p>
       </div>
    )
}

export default TicketCard; 