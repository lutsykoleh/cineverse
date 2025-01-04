import { Route, Routes } from 'react-router-dom'

import './App.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog/Catalog'
import Film from './pages/Film'
import Library from './pages/Library'

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/library" element={<Library />} />
        <Route path="/films/:id" element={<Film />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
