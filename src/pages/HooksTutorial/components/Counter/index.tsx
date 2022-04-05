import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../../context'
import { useReducer } from 'react';
import { reducer, initialState, init } from './reducer'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0) // Here, useState is a Hook

  useEffect(() => {
    const countWrapper = document.getElementById("count-wrapper")
    if (countWrapper) countWrapper.innerHTML = `${count}`
    return function cleanup() { // return () => {
      console.log("This is cleanup function")
    }
  }, [count]) // Only re-run the effect if "count" changes

  const [state, dispatch] = useReducer(reducer, initialState, init)
  
  return (
    <ThemeContext.Consumer>
      { value => 
        <div style={value}>
          <h2>Counter</h2>
          <div id="count-wrapper">Click button to start counter</div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count+1)}>Click me</button>
          <p>Count: {state.count}</p>
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
          <button onClick={() => dispatch({type: 'reset', payload: initialState})}>Reset</button>
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
      }
    </ThemeContext.Consumer>
  );
};

export default Counter