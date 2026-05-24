import './index.css'
import KarticaVest from './KarticaVest.jsx';
import Kartica2 from './Kartica2.jsx';
import Kartica3 from './Kartica3.jsx';
import { Link, useNavigate } from 'react-router-dom';
import useTekstovi from './hooks/useTekstovi';
import izvuciSliku from './utils/izvuciSliku';

function Hardver() {
    const navigate = useNavigate();
    const tekstovi = useTekstovi('hardver');

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
            <div className='cursor-pointer' onClick={() => handleKlik('RTX 5090 Recenzija')}>
                <Kartica3 slika='./geforce-rtx-5090.jpg' imeSlike='GeForce RTX 5090' tekst='RTX 5090 Recenzija' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Najbolja Budžet Tastatura')}>
                <Kartica3 slika='./aula-f99.jpg' imeSlike='Aula-f99' tekst='Najbolja Budžet Tastatura' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('Novi Framework Laptop')}>
                <Kartica3 slika='./framework-laptop.jpg' imeSlike='Framework Laptop 13' tekst='Novi Framework Laptop' />
            </div>
        </div>

        <div className='flex items-center mt-40 border-b border-gray-400 mb-7'>
            <p className='font-bold text-4xl mb-1'>NAJNOVIJE VESTI</p>
        </div>

        <div className='flex flex-col justify-center'>
            <div className='cursor-pointer' onClick={() => handleKlik('Intel CPU')}>
                <Kartica2 slika='./intel-cpu.jpg' imeSlike='Intel CPU' tekst='Globalna nestašica procesora je navodno drastičnija nego nestašica RAM memorije, dok se industrija oslanja na izlazak novu Intel 18A tehnologiju.' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('PlayStation 5')}>
                <Kartica2 slika='./sony-ps5.jpg' imeSlike='PlayStation 5' tekst='Sony povećao cenu PlayStation 5 konzola na globalnom nivou.' />
            </div>
            <div className='cursor-pointer' onClick={() => handleKlik('AMD Ryzen 9950X3D2')}>
                <Kartica2 slika='./amd-ryzen.jpg' imeSlike='AMD Ryzen 9950X3D2' tekst='AMD izbacuje Ryzen 9 9950X3D2 Dual Edition processor koji kombinuje visoke performanse "Zen 5" tehnologije jezgra sa dual 2nd Gen AMD 3D V-Cache tehnologijom kroz svih 16 jezgara' />
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

export default Hardver;