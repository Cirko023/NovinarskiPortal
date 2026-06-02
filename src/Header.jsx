import './index.css'
import { NavLink } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';
import { useState, useEffect } from 'react';

function Header({ pretraga, setPretraga }) {
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
 
    return (
        <header className='w-full bg-slate-950/95 fixed top-0 left-0 z-50 shadow-2xl shadow-slate-950/40'>
            <div className='flex w-full flex-col gap-4 px-6 py-5 text-white max-w-7xl mx-auto'>
                <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Novinarski Portal</h1>
                        <p className='text-sm text-slate-300'>Sve o IT industriji...</p>
                    </div>
                    <div className='flex flex-wrap items-center gap-3 justify-end'>
                        {user ? (
                            <>
                                <span className='text-slate-200 text-sm'>Dobrodošli, {user.email}</span>
                                <NavLink className='rounded-full bg-cyan-400 px-6 py-3 text-base text-slate-950 font-semibold transition hover:bg-cyan-300' to='/dodaj-tekst'>Dodaj tekst</NavLink>
                                <button
                                    onClick={handleLogout}
                                    className='rounded-full bg-red-500 px-6 py-3 text-base text-white transition hover:bg-red-600'
                                >
                                    Odjavi se
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink className='rounded-full bg-white px-6 py-3 text-base text-slate-950 font-semibold transition hover:bg-slate-200' to='/login'>Prijava</NavLink>
                                <NavLink className='rounded-full bg-slate-700 px-6 py-3 text-base text-white font-semibold transition hover:bg-slate-600' to='/register'>Registracija</NavLink>
                            </>
                        )}
                    </div>
                </div>

                <nav className='flex flex-wrap gap-3 text-base text-slate-200'>
                    <NavLink className='rounded-full bg-slate-800/90 px-5 py-3 transition hover:bg-slate-700' to='/'>Početna</NavLink>
                    <NavLink className='rounded-full bg-slate-800/90 px-5 py-3 transition hover:bg-slate-700' to='/hardver'>Hardver</NavLink>
                    <NavLink className='rounded-full bg-slate-800/90 px-5 py-3 transition hover:bg-slate-700' to='/igrice'>Video Igre</NavLink>
                    <NavLink className='rounded-full bg-slate-800/90 px-5 py-3 transition hover:bg-slate-700' to='/tipsandtricks'>Tips & Tricks</NavLink>
                    <NavLink className='rounded-full bg-slate-800/90 px-5 py-3 transition hover:bg-slate-700' to='/telefoni'>Mobilni Uređaji</NavLink>
                    <NavLink className='rounded-full bg-slate-800/90 px-5 py-3 transition hover:bg-slate-700' to='/softver'>Softver</NavLink>
                    <NavLink className='rounded-full bg-slate-800/90 px-5 py-3 transition hover:bg-slate-700' to='/dogadjaji'>Događaji</NavLink>
                </nav>

                {/* SEARCH BAR */}
                <input
                    type='text'
                    placeholder='Pretraži tekstove...'
                    value={pretraga}
                    onChange={(e) => setPretraga(e.target.value)}
                    className='w-full p-3 rounded-xl border border-slate-700 bg-slate-800/80 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500'
                />
            </div>
        </header>
    )
}

export default Header;