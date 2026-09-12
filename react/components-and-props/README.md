# React Components and Props

## What I Learned

### Components

A React component is a reusable piece of UI. Components allow me to
create something once and reuse it in multiple situations instead of
recreating the same HTML/JSX.

### Props

Props are used to pass information to components so that the component
can display different information.

For example:

```jsx
<TicketCard priority="High" /> 
```

The TicketCard component can access the value using:

```jsx 
    props.priority
```

evaluates to: 
High 