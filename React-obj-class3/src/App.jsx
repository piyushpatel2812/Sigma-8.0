import { useState } from 'react'
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticket from './Ticket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LudoBoard/> */}

    {/* <TodoList/> */}
    {/* <Lottery/> */}
    {/* <TicketNum num={5}/> */}

    <Ticket ticket={[0,1,2]}/>

    </>
  )
}

export default App
