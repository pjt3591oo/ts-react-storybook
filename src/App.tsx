import React, {useState} from 'react';
import Counter from './Counter'
import './App.css';

function App() {
  const [ name, setName ] = useState('props.name')

  const onChange = (e: any) => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter name={name} onChange={onChange}/>
      </header>
    </div>
  );
}

export default App;
