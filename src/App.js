import './App.css'
import React, { useState } from 'react'

 const App = () => {

  const appStyle = {
    padding: '60px', 
    fontSize: '30px', 
    fontWeight: 'bold'
  }

  const counterStyle = {
    padding: '20px', 
    fontSize: '20px', 
    fontWeight: 'bold'
  }

  const [str , setStr] = useState('')

  const stringArray = str.split('\n')
  const firstItem = stringArray[0]
  const quontity = stringArray.filter(s => s === firstItem).length
   
     
  return (
    <div className="App">
      <div style = {appStyle}>
       SOME APP
      </div>
      <textarea 
        placeholder='Enter some lines and enjoy the miracle...
        
        By the way do not forget to split lines with "Enter"' 
        rows='15' 
        value={str} 
        type='text' 
        onChange={e => setStr(e.target.value)} 
        >
        </textarea>
      <div>
        See, how many times the first line appears: 
          <span style = {counterStyle}>
            {str === '' ? 0 : quontity}
          </span> 
      </div>
      <button onClick={() => setStr('')}>Clear text area</button>
    </div>
  )
}

export default App
