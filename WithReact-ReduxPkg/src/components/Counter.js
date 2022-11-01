import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';

const Counter = () => {
  const increaseValue = useRef("");
  const dispatcher = useDispatch();
  const counterValue = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  console.log(counterValue);
  
  const incrementHandler = () => {
    dispatcher({type: 'increment'});
  };
  
  const decrementHandler = () => {
    dispatcher({type: 'decrement'});
  };
  
  const increaseHandler = () => {
    debugger;
    dispatcher({type: 'increase', amount: parseInt(increaseValue.current.value)});
  };

  const resetCounterHandler = () => {
    dispatcher({type: 'reset'});
  };

  const hideCounterHandler = () => {
    dispatcher({type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{`Value: ${counterValue}`}</div>}
      <div classes>
        <button onClick={incrementHandler}>Increment</button>
        <div>
          <input type="text" ref={increaseValue} ></input>
          <button onClick={increaseHandler}>{`Increase by ${increaseValue.current.value}`}</button>
        </div>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={resetCounterHandler}>Reset</button>
      <button onClick={hideCounterHandler}>Toggle display</button>
    </main>
  );
};

export default Counter;
