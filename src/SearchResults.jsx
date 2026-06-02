import './index.css'
import { Link } from 'react-router-dom';
import useTekstovi from './hooks/useTekstovi';
import izvuciSliku from './utils/izvuciSliku';

function SearchResults({ pretraga }) {
    const tekstovi = useTekstovi();
    
    const filtrirani = tekstovi.filter(t =>
        t.naslov.toLowerCase().includes(pretraga.toLowerCase())
    );

    return (
        <div className='max-w-7xl mx-auto px-6'>
            <div className='py-10'>
                <h1 className='text-4xl font-bold text-white mb-2'>Rezultati pretrage</h1>
                <p className='text-slate-400 mb-8'>"{pretraga}" - pronađeno <span className='font-semibold text-cyan-400'>{filtrirani.length}</span> rezultata</p>

                {filtrirani.length > 0 ? (
                    <div className='flex flex-col gap-6'>
                        {filtrirani.map((tekst) => {
                            const slika = izvuciSliku(tekst.sadrzaj);
                            return (
                                <Link key={tekst.id} to={`/tekst/${tekst.id}`}>
                                    <div className='flex flex-row bg-slate-900/95 mb-10 rounded-3xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden cursor-pointer border border-slate-700'>
                                        {slika && (
                                            <img
                                                src={slika}
                                                alt={tekst.naslov}
                                                className='w-48 h-32 object-cover'
                                            />
                                        )}
                                        <div className='flex flex-col justify-center p-6'>
                                            <h2 className='text-2xl font-bold text-white'>{tekst.naslov}</h2>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div className='py-20 text-center'>
                        <p className='text-xl text-slate-400'>Nema rezultata za "<span className='font-semibold'>{pretraga}</span>"</p>
                        <p className='text-slate-500 mt-2'>Pokušaj sa drugim ključnom reči</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchResults;
