import TicketCard from "./TicketCard";

function App() {
    return (
        <div>
            <TicketCard title= "Cannot connect to WIFI" description = "User cannot connect to the office WIFI" priority="High" status="Open"></TicketCard>
            <TicketCard title= "Printer not working" description = "User cannot connect to office printer" priority= "Low" status="Open"></TicketCard>
            <TicketCard title= "Password reset" description="User forgot password to their account" priority="Medium" status ="Closed"></TicketCard>
        </div>
              
    )
}

export default App;