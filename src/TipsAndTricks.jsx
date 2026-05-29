import './index.css'
import KarticaVest from './KarticaVest.jsx';
import Kartica2 from './Kartica2.jsx';
import Kartica3 from './Kartica3.jsx';
import { Link, useNavigate } from 'react-router-dom';
import useTekstovi from './hooks/useTekstovi';
import izvuciSliku from './utils/izvuciSliku';

function TipsAndTricks() {
    const navigate = useNavigate();
    const tekstovi = useTekstovi('tipsandtricks');

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
            <div className='cursor-pointer' onClick={() => handleKlik('Linux/Windows dual boot')}>
                <Kartica3 slika='./linux-windows.jpg' imeSlike='Linux i Windows' tekst='Linux/Windows dual boot' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Keyboard shortcuts')}>
                <Kartica3 slika='./keyboard-shortcuts.jpg' imeSlike='Keyboard shortcuts' tekst='Keyboard shortcuts' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Tutorijal o održavanju kompjutera')}>
                <Kartica3 slika='./pc-maintenance-guide.jpg' imeSlike='PC Maintenance Guide' tekst='Tutorijal o održavanju' />
            </div>
        </div>

        <div className='flex items-center mt-40 border-b border-gray-400 mb-7'>
            <p className='font-bold text-4xl mb-1'>NAJNOVIJE VESTI</p>
        </div>

        <div className='flex flex-col justify-center'>
            <div className='cursor-pointer' onClick={() => handleKlik('Kako ubrzati Windows 11')}>
                <Kartica2 slika='./windows11.jpg' imeSlike='Windows 11' tekst='Stvari koje morate znati za ubrzavanje Windows 11 sistema kao isključivanje startup programa, čišćenje temp fajlova...' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('5 VS Code ekstenzija koje morate imati')}>
                <Kartica2 slika='./vs-code.jpg' imeSlike='VS Code' tekst='5 VS Code ekstenzija koje morate imati za bolji developmenat, Prettier, GitLens...' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Kako podesiti dual monitor setup')}>
                <Kartica2 slika='./dual-monitor-setup.jpg' imeSlike='Dual Monitor Setup' tekst='Kako podesiti dual monitor setup za optimalno iskustvo rada i zabave.' />
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

export default TipsAndTricks;