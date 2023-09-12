import './css/style.css'
import './css/reset.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
