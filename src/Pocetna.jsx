import './index.css'
import KarticaVest from './KarticaVest.jsx';
import KarticaNajnovijaVest from './KarticaNajnovijaVest.jsx';
import KarticaGlavnaVest from './KarticaGlavnaVest.jsx';
import { Link, useNavigate } from 'react-router-dom';
import useTekstovi from './hooks/useTekstovi';
import izvuciSliku from './utils/izvuciSliku';
import SearchResults from './SearchResults.jsx';

const KarticaLink = ({ id, children }) => {
    return id ? <Link to={`/tekst/${id}`}>{children}</Link> : <>{children}</>;
};

function Pocetna({ pretraga }) {
    const navigate = useNavigate();
    const tekstovi = useTekstovi();

    // Prikaži search rezultate ako je pretraga aktivna
    if (pretraga.trim()) {
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
        <div className='flex flex-row justify-center items-center bg-linear-to-r/hsl from-gray-900 to-gray-600 gap-10 mb-40 mt-40 w-full h-130'>
            <div className='cursor-pointer' onClick={() => handleKlik('Subnautica 2 Rani Pristup Recenzija')}>
                <KarticaGlavnaVest slika='./subnautica2.jpg' ImeSlike='Subnautica 2' tekst='Subnautica 2 Recenzija' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Steam Deck Recenzija')}>
                <KarticaGlavnaVest slika='./steam-deck.jpg' ImeSlike='Steam Deck' tekst='Steam Deck Recenzija' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Stvari koje smo Objavili na I/O 2026')}>
                <KarticaGlavnaVest slika='./google-io.jpg' ImeSlike='Google I/O 2026' tekst='Google I/O 2026' />
            </div>
        </div>

        <div className='flex items-center mt-40 border-b border-gray-400 mb-7'>
            <p className='font-bold text-4xl mb-1'>HIT IGRE</p>
        </div>

        <div className='flex flex-row justify-center items-center gap-10'>
            <div className='cursor-pointer' onClick={() => handleKlik('Slay The Spire 2 Beta Azuriranja')}>
                <KarticaVest slika='./slay-the-spire-2.jpg' ImeSlike='Slay the Spire 2' tekst='Slay the Spire 2 je najavljen! Očekuje se da će doneti nove karte, 
                likove i izazove, pružajući igračima još dublje iskustvo u ovom popularnom roguelike deck-building žanru.' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Clair Obscur Expedition 33 DLC')}>
                <KarticaVest slika='./clair-obscure.jpg' ImeSlike='Clair Obscure' tekst='Clair Obscure je novi igrački pristup u svetu roguelike igara, 
                pružajući igracima jedinstveno iskustvo u preživljavanju i strategiji.' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Firefly i Comet: Kako se Boriti protiv novih Arkova')}>
                <KarticaVest slika='./arc-raiders.jpg' ImeSlike='Arc Raiders' tekst='Arc Raiders je nova igra koja kombinuje elemente akcije i avanture, 
                pružajući igračima dinamično iskustvo u borbi protiv vanzemaljskih pretnji.' />
            </div>
        </div>

        <div className='flex items-center border-b border-gray-400 mb-7'>
            <p className='font-bold text-4xl mb-1 text-black'>NAJNOVIJE VESTI</p>
        </div>

        <div className='flex flex-col justify-center'>
            <div className='cursor-pointer' onClick={() => handleKlik('Nintendo Switch 2 je izašao: Sve što treba da znaš pre kupovine')}>
                <KarticaNajnovijaVest slika='./nintendo-switch.jpg' ImeSlike='Nintendo Switch' tekst='Nintendo Switch je najavio novu liniju konzola sa poboljšanim performansama 
                i većim ekranom, pružajući igračima još bolje iskustvo igranja.' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Steam Deck Recenzija')}>
                <KarticaNajnovijaVest slika='./steam-deck.jpg' ImeSlike='Steam Deck' tekst='Steam Deck je nova prenosiva gaming konzola koja se takmici sa Nintendo Switch-om, 
                nudeći igračima mogućnost da igraju svoje omiljene PC igre na putu.' />
            </div>
        </div>

        <div className='flex items-center border-b border-gray-400 mb-7 mt-20'>
            <p className='font-bold text-4xl mb-1'>NAJNOVIJI TEKSTOVI</p>
        </div>

        <div className='flex flex-col mb-20'>
            {tekstovi.map((tekst) => {
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
        </>
    );
}

export default Pocetna;