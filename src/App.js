import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement} from './actions';

function App() {
  const counter = useSelector(state=>state.counter);
  const logged = useSelector(state=>state.logged);
  const dispatch = useDispatch();

  return (
    <div>
     <p>Hello</p>
     <h2>counter is this:  {counter}</h2>
     <button onClick={()=> dispatch(increment(5))}> + </button>
     <button onClick={()=> dispatch(decrement())}>-</button>
      {!logged ? <h1>logged in</h1> : ''}
    </div>
  );
}

export default App;
