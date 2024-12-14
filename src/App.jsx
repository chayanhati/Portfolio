import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Aside from './components/Aside'

const App = () => {
  return (
    <>
    <Aside/>
    <div className="main-content">
      <Navbar/>
      <section style={{
        scrollBehavior: "smooth"
      }}>
        <Outlet/>
      </section>
    </div>
    </>
  )
}

export default App