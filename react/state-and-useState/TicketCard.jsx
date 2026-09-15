import { useState } from "react";

function TicketCard(props) {
    const [status, setStatus] = useState(props.status);

    return (
        <div>
            <h1>{props.title}</h1>
            <p>Description: {props.description}</p>
            <p>Priority: {props.priority}</p>
            <p>Status: {status}</p>
            <button onClick={() => {
                setStatus(status === "Open" ? "Closed" : "Open"); 
            }}>
               {status === "Open" ? "Close" : "Reopen"} Ticket
            </button>
        </div>
    );
}

export default TicketCard;