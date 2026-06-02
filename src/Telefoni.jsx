import './index.css'
import KarticaVest from './KarticaVest.jsx';
import Kartica2 from './Kartica2.jsx';
import Kartica3 from './Kartica3.jsx';
import { Link, useNavigate } from 'react-router-dom';
import useTekstovi from './hooks/useTekstovi';
import izvuciSliku from './utils/izvuciSliku';
import SearchResults from './SearchResults.jsx';

function Telefoni({ pretraga }) {
    const navigate = useNavigate();
    const tekstovi = useTekstovi('telefoni');
    
    if (pretraga?.trim()) {
        return <SearchResults pretraga={pretraga} />;
    }

    const idPoNaslovu = (naslov) => {
        const pronadjen = tekstovi.find(
            t => t.naslov.toLowerCase() === naslov.toLowerCase()
        );
        return pronadjen ? pronadjen.id : null;
    };

    const handleKlik = (naslov) => {
        const id = idPoNaslovu(naslov);
        if (id) navigate(`/tekst/${id}`);
    };

    return (
        <>
        <div className='flex flex-row justify-center items-center gap-10 mb-40 mt-40 bg-linear-to-r/hsl from-gray-900 to-gray-600 w-full h-130'>
            <div className='cursor-pointer' onClick={() => handleKlik('Samsung Galaxy S25 Ultra')}>
                <Kartica3 slika='./samsung-s25.jpg' imeSlike='Samsung Galaxy S25 Ultra' tekst='Samsung Galaxy S25 Ultra' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('iPhone 17 Pro Recenzija')}>
                <Kartica3 slika='./iphone17.jpg' imeSlike='iPhone 17 Pro' tekst='iPhone 17 Pro Recenzija' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Najbolji Budžet Telefon 2026')}>
                <Kartica3 slika='./budget-telefoni.jpg' imeSlike='Budget Telefon' tekst='Najbolji Budžet Telefon 2026' />
            </div>
        </div>

        <div className='flex items-center mt-40 border-b border-gray-400 mb-7'>
            <p className='font-bold text-4xl mb-1'>NAJNOVIJE VESTI</p>
        </div>

        <div className='flex flex-col justify-center'>
            <div className='cursor-pointer' onClick={() => handleKlik('Android 16 novosti')}>
                <Kartica2 slika='./android16.jpg' imeSlike='Android 16' tekst='Google najavio Android 16 sa novim AI funkcijama, poboljšanim battery life-om i redizajniranim notification sistemom.' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Apple iOS 19 update')}>
                <Kartica2 slika='./ios19.jpg' imeSlike='iOS 19' tekst='iOS 19 donosi duboku integraciju sa Apple Intelligence, nove customizacije lock screena i poboljšane iMessage funkcije.' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Foldable telefoni u 2026')}>
                <Kartica2 slika='./foldable.jpg' imeSlike='Foldable Telefon' tekst='Samsung i Huawei predvode tržište sklopivih telefona, dok Google najavljuje svoj prvi Pixel Fold 2 model.' />
            </div>
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

export default Telefoni;