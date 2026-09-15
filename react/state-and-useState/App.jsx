import TicketCard from "./TicketCard";

function App() {
    return (
        <div>
            <TicketCard
                title="Wi-Fi not working"
                description="User cannot connect to office Wi-Fi"
                priority="High"
                status="Open"
            />
        </div>
    );
}

export default App;