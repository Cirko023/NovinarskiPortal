import './index.css'
import KarticaVest from './KarticaVest.jsx';
import Kartica2 from './Kartica2.jsx';
import Kartica3 from './Kartica3.jsx';
import { Link, useNavigate } from 'react-router-dom';
import useTekstovi from './hooks/useTekstovi';
import izvuciSliku from './utils/izvuciSliku';

function Softver() {
    const navigate = useNavigate();
    const tekstovi = useTekstovi('softver');

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
            <Link to="/tekst/yFCOYvd1TnoiUUYteSpX">
                <Kartica3 slika='./windows12.jpg' imeSlike='Windows 12' tekst='Windows 12 Recenzija' />
            </Link>
            <div className='cursor-pointer' onClick={() => handleKlik('Najbolje Adobe Alternative u 2026')}>
                <Kartica3 slika='./adobe.jpg' imeSlike='Adobe vs Free' tekst='Adobe vs Free Alternative' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Najbolji Video Editing Software za 2026')}>
                <Kartica3 slika='./editing-software.jpg' imeSlike='Video Editing Software' tekst='Najbolji Editing Software' />
            </div>
        </div>

        <div className='flex items-center mt-40 border-b border-gray-400 mb-7'>
            <p className='font-bold text-4xl mb-1'>NAJNOVIJE VESTI</p>
        </div>

        <div className='flex flex-col justify-center'>
            <div className='cursor-pointer' onClick={() => handleKlik('Office 2026: Sta znamo dosad i sta ocekivati')}>
                <Kartica2 slika='./m-office2026.jpg' imeSlike='Microsoft Office 2026' tekst='Microsoft izbacuje novi Office paket sa dubokom AI integracijom, Copilot asistentom u svakoj aplikaciji i novim real-time collaboration funkcijama' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Najbolji antivirus softver 2026')}>
                <Kartica2 slika='./antivirus.jpg' imeSlike='Antivirus Software' tekst='Sa porastom AI-generisanih malware napada, izbor pravog antivirusa nikad nije bio važniji. Bitdefender, Kaspersky i Windows Defender predvode listu u 2026, ali koji je pravi izbor za tebe? Testirali smo performanse, uticaj na sistem i cenu kako bismo pronašli pobednika.' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('AI Alati za Pisanje Koda: Da li će zameniti programere?')}>
                <Kartica2 slika='./ai-tools.jpg' imeSlike='AI Coding Alati' tekst='AI coding alati poput GitHub Copilot, Cursor i Claude Code drastično menjaju način na koji se piše kod — ali da li zaista ugrožavaju programere?' />
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

export default Softver;