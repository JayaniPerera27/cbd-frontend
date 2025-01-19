//import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
//import UserData from './components/userData'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

    <ProductCard name="Laptop" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" price="$99.99"></ProductCard>
    <ProductCard name="Tphone" price="$120.22"></ProductCard>
    

      
    </>
  )
}

export default App
