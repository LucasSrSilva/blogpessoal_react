import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cadastro />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Cadastro' element={<Cadastro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
