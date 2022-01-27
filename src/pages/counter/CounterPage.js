import React from 'react';
import { useCounter } from './useCounter';

const CounterPage = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};

export default CounterPage;
