# Arrays and map() in React 

## What I Learned 

### Arrays
[Explain what an array is in your own words.]
Arrays are structures that store strings, numbers, objects, and even other arrays. This will help with the storage of tickets in my case.  

### Objects 
[Explain what a JavaScript object is.]
A Javascript object is a structure that stores related information as properties. For example, ticket object can contain an id, title, description, priority, and status.
## map()
[Explain what .map() does.]
.map() takes elements of an array, transforms them, and returns a new array back. 

## React Keys 
[Explain why key = {ticket.id} was necessary]

React wants this when we are generating multiple tickets so there is a way to keep track of them when modifications are made (adding removing,reordering, and updating tickets) 

## How I'll Use This 

[Explain how this could eventually be useful in the Help Desk project.] 

This can be useful when working with multiple tickets as it can store tickets as objects in an array and use .map() to generate a TicketCard for each ticket instead of manually creating each component. 

[How did you go from our tickets array displaying multiple TicketCard components on the screen?]

I started by making an array of ticket objects called tickets. I then used .map() to go through each ticket object and return a TicketCard component using the ticket's properties as props. React then renders the resulting TicketCard components on the UI.

tickets array
      ↓
    .map()
      ↓
current ticket object
      ↓
ticket.title
ticket.description
ticket.priority
ticket.status
      ↓
passed as props
      ↓
<TicketCard />
      ↓
rendered UI

