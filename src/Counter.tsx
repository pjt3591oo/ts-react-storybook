import React, { useState } from 'react';

interface CounterProps {
  name: string;
}

const Counter: React.FC<CounterProps> = props => {
  const [ name, setName ] = useState(props.name)

  const onChange = (e: any) => {
    setName(e.target.value)
  }

  return (
    <>
      <p>{name} counter</p>
      <input value={name} onChange={onChange}/>
    </>
  )
}

export default Counter;