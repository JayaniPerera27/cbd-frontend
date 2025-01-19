//import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
//import UserData from './components/userData'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

    <ProductCard name="Laptop" price="$99.99"></ProductCard>
    <ProductCard name="Tphone" price="$120.22"></ProductCard>
    <ProductCard></ProductCard>

      
    </>
  )
}

export default App
