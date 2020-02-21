1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter,

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store - holds the whole state tree. *It gives access to props throughout the app.
actions - sends data to the application from the store. *Actions tell the reducers which action type to process and what data is being used.
reducers - changes the states based on the actions sent to the store. \*Reducers says what changes sill be made on state based on actions

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

the application state can be accessed anywhere in the project through the connect and map state to props.
the component state is specific to that component

1.  What is middleware?

middleware is code you can put between the framework receiving a request and the framework generating a response
\*middleware gives us added functionality to process info like thunk

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk gives us the ability to use a function to receive a function and return a function. It gives us the ability to use dispatch and make axios calls

1.  Which `react-redux` method links up our `components` with our `redux store`?

the Provider
