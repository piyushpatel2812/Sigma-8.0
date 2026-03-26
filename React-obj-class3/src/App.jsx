import { useState } from 'react'
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LudoBoard/> */}

    {/* <TodoList/> */}
    <Lottery/>

    </>
  )
}

export default App
