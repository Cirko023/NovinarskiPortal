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

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className='pt-20'>
      <Routes>
        <Route path='/' element={<Pocetna />} />
        <Route path='/hardver' element={<Hardver />} />
        <Route path='/igrice' element={<Igrice />}/>
        <Route path='/tipsandtricks' element={<TipsAndTricks />}/>
        <Route path='/telefoni' element={<Telefoni />}/>
        <Route path='/softver' element={<Softver />} />
        <Route path='/dogadjaji' element={<Dogadjaji />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dodaj-tekst' element={<DodajTekst />} />
      </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App
