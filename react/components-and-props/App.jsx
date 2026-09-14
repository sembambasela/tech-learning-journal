import TicketCard from "./TicketCard";

const tickets = [
    {
        id: 1,
        title: "Cannot connect to Wi-Fi",
        description: "User cannot connect to office Wi-Fi",
        priority: "High",
        status: "Open"
    },
    {
        id: 2,
        title: "Printer not working",
        description: "User cannot connect to office printer",
        priority: "Low",
        status: "Open"
    },
    {
        id: 3,
        title: "Password reset",
        description: "User forgot their password",
        priority: "Medium",
        status: "Closed"
    }
];

function App() {
    return (
        <div>
            {
                tickets.map((ticket)=> {
                    return  <TicketCard
                    key={ticket.id}
                    title={ticket.title}
                    description={ticket.description}
                    priority={ticket.priority}
                    status={ticket.status} />
                   
                })
            }
        </div>            
    );
}

export default App;