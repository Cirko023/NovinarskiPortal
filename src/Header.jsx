import './index.css'
import { NavLink } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';
import { useState, useEffect } from 'react';

function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe;
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Greška pri odjavi:', error);
        }
    };

    return(
        <>
        <header className='w-screen bg-indigo-500 fixed top-0 left-0 z-50'> 
        {/* Ako budemo imali logo mogli bi neki on hover efekat da se zoom in ili nesto tako */}
        <div className='px-4 flex flex-col pb-2'>
        <h1 className='text-(--boja-teksta-svetla) text-center text-4xl py-3'>Novinarski Portal</h1>
        <p className='text-(--boja-teksta-svetla) text-xl py-2'>Sve o IT industriji...</p>
            <div className='flex gap-4 items-right justify-end'>
                {user ? (
                    <>
                        <span className='text-white'>Dobrodošli, {user.email}</span>
                        <NavLink className='bg-white text-indigo-500 px-4 py-1 rounded' to="/dodaj-tekst">Dodaj tekst</NavLink>
                        <button
                            onClick={handleLogout}
                            className='bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600'
                        >
                            Odjavi se
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink className='bg-white text-indigo-500 px-4 py-1 rounded' to="/login">Prijava</NavLink>
                        <NavLink className='bg-white text-indigo-500 px-4 py-1 rounded' to="/register">Registracija</NavLink>
                    </>
                )}
            </div>
        <nav className='flex justify-between w-full'>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1'  to="/">Pocetna</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/hardver">Hardver PC</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/igrice">Video Igre</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/tipsandtricks">Tips & Tricks</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/telefoni">Mobilni Uređaji</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/softver">Softver</NavLink>
            <NavLink className='border-r-2 border-white pr-24 pl-12 py-1' to="/dogadjaji">Događaji</NavLink>

        </nav>
        </div> 

        </header>
        </>
    )
}

export default Header;