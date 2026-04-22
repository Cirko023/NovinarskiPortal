import './index.css'
import KarticaVest from './KarticaVest.jsx';
import Kartica2 from './Kartica2.jsx';
import Kartica3 from './Kartica3.jsx';

function Hardver() {
    return(
        <>
        <div className='flex flex-row justify-center items-center gap-10 mb-40 mt-40'>
        <Kartica3
            slika='./geforce-rtx-5090.jpg'
            imeSlike='GeForce RTX 5090'
            tekst='RTX 5090 Recenzija'
        />
        <Kartica3 
            slika='./aula-f99.jpg'
            imeSlike='Aula-f99'
            tekst='Najbolja Budžet Tastatura'
        />
        <Kartica3 
            slika='./framework-laptop.jpg'
            imeSlike='Framework Laptop 13'
            tekst='Novi Framework Laptop'
        />
        </div>

        <div class='flex items-center mt-40 border-b border-gray-400 mb-7'>
        <p className='font-bold text-4xl mb-1'>NAJNOVIJE VESTI</p>
        </div>

        <div className='flex flex-col justify-center'>
        <Kartica2
            slika='./intel-cpu.jpg'
            imeSlike='Intel CPU'
            tekst='Globalna nestašica procesora je navodno drastičnija nego nestašica RAM memorije, 
            dok se industrija oslanja na izlazak novu Intel 18A tehnologiju.'
        />
        <Kartica2 
            slika='./sony-ps5.jpg'
            imeSlike='PlayStation 5'
            tekst='Sony povećao cenu PlayStation 5 konzola na globalnom nivou.'
        />
        <Kartica2 
            slika='./amd-ryzen.jpg'
            imeSlike='AMD Ryzen 9950X3D2'
            tekst='AMD izbacuje Ryzen 9 9950X3D2 Dual Edition processor 
            koji kombinuje visoke performanse "Zen 5" tehnologije jezgra 
            sa dual 2nd Gen AMD 3D V-Cache tehnologijom kroz svih 16 jezgara'
        />
        </div>
        </>
    )
}

export default Hardver