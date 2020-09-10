import React, { useState } from 'react';
import './App.css'



function App() {
  


const [a, setA] = useState('')
const [b, setB] = useState('')
const [op, setOp] = useState('')


  const handleInputA = (e) => {
    setA(e.target.value)
  }

  const handleInputB = (e) => {
    setB(e.target.value)
  }

  const handleInputOp = (e) => {
    setOp(e.target.value)
}
  const buttonAction = () => {

  }

async function makeGetRequest() {

  let params = {
    operand1: "6",
    operand2: "10",
    operator: '+',    
  }

    const axios = require('axios');
    let res = await axios.get('https://cvqzqgz4ae.execute-api.us-east-1.amazonaws.com/dev/calc/40/100/add', params)

    console.log(res.data)
    console.log(params)
    
    
    
}

makeGetRequest();
  



  return (
    <>
      
      <div>{setA}
        <input type="number" value={a} onChange={handleInputA}></input>
        <input type="number" value={b} onChange={handleInputB}></input>
        <input type="text" value={op} onChange={handleInputOp}></input>
        <button onClick={buttonAction}>Clicar</button>
      </div>
    </>
  );
}

export default App;