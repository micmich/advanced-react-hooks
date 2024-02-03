// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(prevState, event) {
  switch (event?.type) {
    case 'INCREMENT':
      return {...prevState, count: prevState.count + event.step};
    default:
      throw Error(`Unknown eventType: ${event?.type}`);
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, dispatch] = React.useReducer(countReducer, { count: initialCount })

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount

  // const increment = () => setCount(count + step)

  const { count } = state;
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <><Counter /><p>Ver-callback-event.type</p></>
}

export default App
