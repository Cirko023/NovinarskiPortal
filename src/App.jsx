import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header.jsx'
import Pocetna from './Pocetna.jsx'
import Hardver from './Hardver.jsx'
import Igrice from './Igrice.jsx'
import TipsAndTricks from './TipsAndTricks.jsx'
import Softver from './Softver.jsx'
import Dogadjaji from './Dogadjaji.jsx'
import Telefoni from './Telefoni.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import DodajTekst from './DodajTekst.jsx'
import TekstDetalji from './TekstDetalji.jsx'
import { Toaster } from 'react-hot-toast';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [pretraga, setPretraga] = useState('');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Header theme={theme} toggleTheme={toggleTheme} pretraga={pretraga} setPretraga={setPretraga} />
      <div className='pt-20'>
      <Routes>
        <Route path='/' element={<Pocetna pretraga={pretraga} />} />
        <Route path='/hardver' element={<Hardver pretraga={pretraga} />} />
        <Route path='/igrice' element={<Igrice pretraga={pretraga} />}/>
        <Route path='/tipsandtricks' element={<TipsAndTricks pretraga={pretraga} />}/>
        <Route path='/telefoni' element={<Telefoni pretraga={pretraga} />}/>
        <Route path='/softver' element={<Softver pretraga={pretraga} />} />
        <Route path='/dogadjaji' element={<Dogadjaji pretraga={pretraga} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dodaj-tekst' element={<DodajTekst />} />
        <Route path="/tekst/:id" element={<TekstDetalji />} />
      </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App
