import React, { useState } from 'react';
import Navbar from './Navbar'
import './Dsa.css'
const Dsa = () => {

  // const [selectedButton, setSelectedButton] = useState("Arrays");

  // const selectButton = (value) => {
  //   setSelectedButton(value)
  // }
  const [selectedButton, setSelectedButton] = useState("Arrays");

  const selecteButton = (value) => {
    setSelectedButton(value)
  }
  console.log("aa", selectedButton)
  return (

    <div>
      <Navbar />
      <div className='DSA_OuterDiv'>
        <div className='DSA_InnerDiv'>
          <button onClick={() => selecteButton("Arrays")}>Arrays</button>
          <button onClick={() => selecteButton("HashTables")}>HashTables</button>
          <button onClick={() => selecteButton("LinkedList")}>LinkedList</button>
          <button onClick={() => selecteButton("Stacks")}>Stacks</button>
          <button onClick={() => selecteButton("Queues")}>Queues</button>
          <button onClick={() => selecteButton("Trees")}>Trees</button>
        </div>

      </div>
      <div className='selectedButton'>
        <h1>{selectedButton}</h1>
      </div>

    </div>
  )
}

export default Dsa