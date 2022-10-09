import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('mario')

  const handleClick = () => {
    setName('luigi')
    console.log(name)
  }
  return (
    <div className='App'>
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  )
}

export default App
