import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [muralInfo, setMuralInfo] = useState(null)

  return (
    <>
    <MuralAvisos/>
    </>
  )
}
import MuralAvisos from './components/pages/mural';

export default App
