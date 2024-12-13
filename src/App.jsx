import { useState } from 'react'
import Parties from './components/parties'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Parties/>
    </>
  )
}

export default App
