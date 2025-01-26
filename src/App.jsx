//import { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
//import Testing from './components/testing'
import LoginPage from './pages/loginPage.jsx'
import HomePage from './pages/homePage.jsx'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <Routes path="/*">
    <Route path="/" element={<HomePage/>}/>
    <Route path ="/login" element={<LoginPage/>}/>
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
