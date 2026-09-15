# React State and useState 

### What I Learned  

### State 

[Explain what state is in React.]

information the component remembers and can update

[Explain what useState does.] 

useState creates/manages state and gives us the state value plus an updater function. The updater(setStatus) is what changes the state.

[Explain these three parts:]

const [status, setStatus] = useState(props.status); 

-status: current state of status
-setStatus: the function that changes the state of status (updater function)
-props.status: gives useState the initial value from parent 

### Updating State

[Explain what happens when setStatus("Closed") is called.] 

The state of status changes to closed, and React re-renders the component so the UI displays the updated state.

### Events 

[Explain what onClick does in our button]

onClick is an event handler that runs when the button is clicked. When the button gets clicked setStatus() runs.

### Ternary Operator 

[Explain the stucture]

condition ? valueIfTrue : valueIfFalse
a condition is evaluated on the left and if its true the value of the left of the : gets returned otherwise the value on the right gets returned.

[Explain how we used it to toggle between Open and Closed.] 
If the status is "Open", we set it to "Closed". Otherwise, we set it back to "Open". 

## Exercise 

[Briefly explain what you built today.]
We built a component that uses useState which allows us to change the state of status in our ticket.

## How I'll Use This 

[Explain how state could useful in the future Help Desk application.]
This will be useful when we need to dynamically change values on the ui. For example, we need to change the status of a ticket(whether it is open, in progress, closed)

