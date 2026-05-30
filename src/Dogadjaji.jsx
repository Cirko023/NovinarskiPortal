import './index.css'
import KarticaVest from './KarticaVest.jsx';
import Kartica2 from './Kartica2.jsx';
import Kartica3 from './Kartica3.jsx';
import { Link, useNavigate } from 'react-router-dom';
import useTekstovi from './hooks/useTekstovi';
import izvuciSliku from './utils/izvuciSliku';

function Dogadjaji() {
    const navigate = useNavigate();
    const tekstovi = useTekstovi('dogadjaji');

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
            <div className='cursor-pointer' onClick={() => handleKlik('Computex 2026')}>
                <Kartica3 slika='./computex.jpg' imeSlike='Computex 2026' tekst='Computex 2026' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('The Game Awards 2026')}>
                <Kartica3 slika='./game-awards.jpg' imeSlike='The Game Awards 2026' tekst='The Game Awards 2026' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Gamescom 2026')}>
                <Kartica3 slika='./gamescom.jpg' imeSlike='Gamescom 2026' tekst='Gamescom 2026' />
            </div>
        </div>

        <div className='flex items-center mt-40 border-b border-gray-400 mb-7'>
            <p className='font-bold text-4xl mb-1'>NAJNOVIJE VESTI</p>
        </div>

        <div className='flex flex-col justify-center'>
            <div className='cursor-pointer' onClick={() => handleKlik('CES 2026')}>
                <Kartica2 slika='./ces-2026.jpg' imeSlike='CES 2026' tekst='Na ovogodišnjem CES sajmu u Las Vegasu predstavljeni su najnoviji AI uređaji, foldable laptopovi i robotski asistenti koji obećavaju da će promeniti svakodnevni život' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Stvari koje smo Objavili na I/O 2026')}>
                <Kartica2 slika='./google-io.jpg' imeSlike='Google I/O 2026' tekst='Google je na svojoj godišnjoj konferenciji predstavio Android 16, nove Gemini AI modele i revolucionarni Project Astra koji integriše AI u sve Google proizvode.' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Microsoft Build 2026')}>
                <Kartica2 slika='./microsoft.jpg' imeSlike='Microsoft Build 2026' tekst=' Microsoft Build 2026 se održava 2. i 3. juna u San Franciscu — ove godine fokus je na AI alatima za developere, GitHub Copilot unapređenjima i Azure AI platformi. Konferencija će biti dostupna i online besplatno za sve zainteresovane.' />
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

export default Dogadjaji;