import './index.css'
import KarticaVest from './KarticaVest.jsx';
import Kartica2 from './Kartica2.jsx';
import Kartica3 from './Kartica3.jsx';
import { Link } from 'react-router-dom';
import useTekstovi from './hooks/useTekstovi';
import izvuciSliku from './utils/izvuciSliku';

function Igrice() {
    const tekstovi = useTekstovi('igrice');

    return (
        <>
        <div className='flex flex-row justify-center items-center gap-10 mb-40 mt-40 bg-linear-to-r/hsl from-gray-900 to-gray-600 w-full h-130'>
            <Link to="/tekst/jsAspFAC1iMdE2197d7z">
                <Kartica3 slika='./forza-horizon6.jpg' imeSlike='Forza Horizon 6' tekst='Forza Horizon 6 Recenzija' />
            </Link>
            <Link to="/tekst/miWWgh29gubNFYGzu44n">
                <Kartica3 slika='./subnautica2.jpg' imeSlike='Subnautica 2' tekst='Subnautica 2 Recenzija' />
            </Link>
            <Link to="/tekst/aXZuDeWqHzxz5KRHtWPm">
                <Kartica3 slika='./pragmata.jpg' imeSlike='Pragmata' tekst='Pragmata Recenzija' />
            </Link>
        </div>

        <div className='flex items-center mt-40 border-b border-gray-400 mb-7'>
            <p className='font-bold text-4xl mb-1'>NAJNOVIJE VESTI</p>
        </div>

        <Link className='flex flex-col justify-center'>
            <Link to="/tekst/zaTESpAnTAfnIkAtqhdI">
                <Kartica2 slika='./slay-the-spire-2.jpg' imeSlike='Slay the Spire 2' tekst='Slay the Spire 2 beta donosi novi sadržaj — nove karte, relici i izmene balansa stigle su u najnovijem beta update-u, a zajednica aktivno utiče na dalji razvoj igre.' />
            </Link>
            <Link to="/tekst/lF9nEKUdbPdKbV5VoM1o">
                <Kartica2 slika='./clair-obscure.jpg' imeSlike='Clair Obscur' tekst='Clair Obscur: Expedition 33 najavljuje prvi DLC koji proširuje priču o Expeditoru sa novim lokacijama i boss borbama inspirisanim francuskim simbolizmom.' />
            </Link>
            <Link to="/tekst/UZGLVeFPPzROrDBRZn4E">
                <Kartica2 slika='./arc-raiders.jpg' imeSlike='Arc Raiders' tekst='Arc Raiders uvodi nove arkove u igru — svaki sa jedinstvenim mehanizmima, čime se dramatično povećava potreba za kooperativan rad izmedju igraca ovog extraction shootera.' />
            </Link>
        </Link>

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

export default Igrice;