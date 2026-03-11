import './index.css'
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <>
        <header className='w-screen bg-indigo-500 fixed top-0 left-0 z-50'> 
        {/* Ako budemo imali logo mogli bi neki on hover efekat da se zoom in ili nesto tako */}
        <div className='px-4 flex flex-col'>
        <h1 className='text-(--boja-teksta-bela) text-center'>Novinarski Portal</h1>
        <p className='text-sm text-(--boja-teksta-bela)'>Sve o IT industriji...</p>
        <nav className='flex space-x-55'>
            <NavLink to="/">Pocetna</NavLink>
            <NavLink to="/hardver">Hardver PC</NavLink>
            <NavLink to="/igrice">Video Igre</NavLink>
            <NavLink to="/tipsandtricks">Tips & Tricks</NavLink>
            <NavLink to="/telefoni">Mobilni Uređaji</NavLink>
            <NavLink to="/softver">Softver</NavLink>
            <NavLink to="/dogadjaji">Događaji</NavLink>
        </nav>
        </div>
        </header>
        </>
    )
}

export default Header;