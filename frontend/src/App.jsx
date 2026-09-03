import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './layouts/Sidebar'
import MainLayout from './layouts/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Transactions from './pages/Transactions'
import Reports from './pages/Reports'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<MainLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="transactions" element={<Transactions/>}/>
        <Route path="reports" element={<Reports/>}/>
      </Route>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
