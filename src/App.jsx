
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/home'



function App() {
  
return (
  <>
 <Header />

  <Routes>
<Route path="/" element={<Home />} /> 
<Route path="/about" element={<About />} /> 
  </Routes>

 <Footer />

    </>
  )
}

export default App
