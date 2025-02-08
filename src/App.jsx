import { Route, Routes } from 'react-router-dom';

import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import Film from './pages/Film';
import Home from './pages/Home';
import Library from './pages/Library';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/library' element={<Library />} />
          <Route path='/films/:id' element={<Film />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
