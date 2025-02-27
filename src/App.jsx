import './App.css'
import NavBar from './Componenets/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default App
