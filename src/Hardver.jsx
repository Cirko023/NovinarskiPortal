import './index.css'
import KarticaVest from './KarticaVest.jsx';
import KarticaNajnovijaVest from './KarticaNajnovijaVest.jsx';
import KarticaGlavnaVest from './KarticaGlavnaVest.jsx';
import { Link, useNavigate } from 'react-router-dom';
import useTekstovi from './hooks/useTekstovi';
import izvuciSliku from './utils/izvuciSliku';
import SearchResults from './SearchResults.jsx';

function Hardver({ pretraga }) {
    const navigate = useNavigate();
    const tekstovi = useTekstovi('hardver');
    const glavneVesti = tekstovi.filter(t => t.istaknutoGlavna).slice(0, 3);
    const najnovijeVesti = tekstovi.filter(t => t.istaknutoNajnovijaVest).slice(0, 3);

    if (pretraga?.trim()) {
        return <SearchResults pretraga={pretraga} />;
    }

    return (
        <>
        <div className='flex flex-row justify-center items-center gap-10 mb-40 mt-40 bg-linear-to-r/hsl from-gray-900 to-gray-600 w-full h-130'>
            {glavneVesti.map(t => (
                <div key={t.id} className='cursor-pointer' onClick={() => navigate(`/tekst/${t.id}`)}>
                    <KarticaGlavnaVest slika={izvuciSliku(t.sadrzaj) || ''} imeSlike={t.naslov} tekst={t.naslov} />
                </div>
            ))}
        </div>

        <div className='flex items-center mt-40 border-b border-gray-400 mb-7'>
            <p className='font-bold text-4xl mb-1'>NAJNOVIJE VESTI</p>
        </div>

        <div className='flex flex-col justify-center'>
            {najnovijeVesti.map(t => (
                <div key={t.id} className='cursor-pointer' onClick={() => navigate(`/tekst/${t.id}`)}>
                    <KarticaNajnovijaVest slika={izvuciSliku(t.sadrzaj) || ''} imeSlike={t.naslov} tekst={t.sazetak || t.naslov} />
                </div>
            ))}
        </div>

        <div className='flex items-center border-b border-gray-400 mb-7 mt-20'>
            <p className='font-bold text-4xl mb-1'>TEKSTOVI</p>
        </div>

        <div className='flex flex-col mb-20'>
            {tekstovi.map((tekst) => {
                const slika = izvuciSliku(tekst.sadrzaj);
                return (
                    <Link key={tekst.id} to={`/tekst/${tekst.id}`}>
                        <div className='flex flex-row bg-gray-700 mb-10 rounded-xl hover:scale-102 transition-transform duration-300 overflow-hidden cursor-pointer'>
                            {slika && (
                                <img src={slika} alt={tekst.naslov} className='w-48 h-32 object-cover' />
                            )}
                            <div className='flex flex-col justify-center p-5'>
                                <h2 className='text-2xl font-bold text-white'>{tekst.naslov}</h2>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
        </>
    );
}

export default Hardver;