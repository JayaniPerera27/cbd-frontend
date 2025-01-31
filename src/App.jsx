//import { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
//import Testing from './components/testing'
import LoginPage from './pages/loginPage.jsx'
import HomePage from './pages/homePage.jsx'
import SignupPage from './pages/signUpPage.jsx'
import AdminHomePage from './pages/adminHomePage.jsx'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <Routes path="/*">
    <Route path="/" element={<HomePage/>}/>
    <Route path ="/login" element={<LoginPage/>}/>
    <Route path = "/singup" element ={<SignupPage/>}/>
    <Route path = "/admin/*" element = {<AdminHomePage/>}/>

    <Route path ="/*" element={<HomePage/>}/>
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
