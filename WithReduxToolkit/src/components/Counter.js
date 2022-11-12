import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { counterActions } from '../store/counter';

const Counter = () => {
  const increaseValue = useRef("");
  const dispatcher = useDispatch();
  const counterValue = useSelector(state => state.counterReducer.counter);
  const showCounter = useSelector(state => state.counterReducer.showCounter);
  
  const incrementHandler = () => {
    dispatcher(counterActions.increment());
  };
  
  const decrementHandler = () => {
    dispatcher(counterActions.decrement());
  };
  
  const increaseHandler = () => {
    dispatcher(counterActions.increaseBy(parseInt(increaseValue.current.value)));
  };

  const resetCounterHandler = () => {
    dispatcher(counterActions.reset());
  };

  const hideCounterHandler = () => {
    dispatcher(counterActions.toggleCounter());
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
