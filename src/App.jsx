import { useState} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Listagem from './pages/Listagem';

const App = () => {

  const [color] = useState ("#0000ff")
  

  return (
    <Routes> 
      <Route path="/" /> 
    </Routes>
  )
}

export default App; 

