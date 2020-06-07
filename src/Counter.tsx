import React from 'react';

interface CounterProps {
  name: string;
  onChange: any;
}

const Counter: React.FC<CounterProps> = props => {
  
  return (
    <>
      <p>{props.name} counter</p>
      <input value={props.name} onChange={props.onChange}/>
    </>
  )
}

export default Counter;