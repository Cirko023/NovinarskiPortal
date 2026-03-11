import './index.css'
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <>
        <header className='w-screen bg-indigo-500 fixed top-0 left-0 z-50'> 
        {/* Ako budemo imali logo mogli bi neki on hover efekat da se zoom in ili nesto tako */}
        <div className='px-4 flex flex-col pb-2'>
        <h1 className='text-(--boja-teksta-svetla) text-center text-4xl py-3'>Novinarski Portal</h1>
        <p className='text-(--boja-teksta-svetla) text-xl py-2'>Sve o IT industriji...</p>
        <nav className='flex justify-between w-full'>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1'  to="/">Pocetna</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/hardver">Hardver PC</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/igrice">Video Igre</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/tipsandtricks">Tips & Tricks</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/telefoni">Mobilni Uređaji</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/softver">Softver</NavLink>
            <NavLink className='pr-24 pl-12 py-1' to="/dogadjaji">Događaji</NavLink>
        </nav>
        </div> 
        </header>
        </>
    )
}

export default Header;