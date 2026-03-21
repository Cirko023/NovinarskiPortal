import './index.css'
import KarticaVest from './KarticaVest.jsx';
import Kartica2 from './Kartica2.jsx';

function Pocetna() {
    return(
        <>

        <div class='flex items-center mt-40 border-b border-gray-400 mb-7'>
        <p className='font-bold text-4xl mb-1'>HIT IGRE</p>
        </div>

        <div class='flex flex-row justify-center items-center gap-10'> 

           <KarticaVest
                slika='./slay-the-spire-2.jpg'

                ImeSlike='Slay the Spire 2'
            
                tekst='Slay the Spire 2 je najavljen! Očekuje se da će doneti nove karte, likove i izazove, pružajući igračima još dublje iskustvo u ovom popularnom roguelike deck-building žanru.'
           />



            <KarticaVest
                slika='./clair-obscure.jpg'

                ImeSlike='Clair Obscure'

                tekst='Clair Obscure je novi igrački pristup u svetu roguelike igara, pružajući igracima jedinstveno iskustvo u preživljavanju i strategiji.'
            />

            
            <KarticaVest

                slika='./arc-raiders.jpg'

                ImeSlike='Arc Raiders'

                tekst='Arc Raiders je nova igra koja kombinuje elemente akcije i avanture, pružajući igračima dinamično iskustvo u borbi protiv vanzemaljskih pretnji.'

            />
            
        </div>

        <div class='flex items-center border-b border-gray-400 mb-7'>
        <p className='font-bold text-4xl mb-1'>NEWS</p>
        </div>

        <div class='flex flex-col justify-center'>

            <Kartica2
                slika = './nintendo-switch.jpg'

                ImeSlike = 'Nintendo Switch'

                tekst = 'Nintendo Switch je najavio novu liniju konzola sa poboljšanim performansama i većim ekranom, pružajući igračima još bolje iskustvo igranja.'

            />

            <Kartica2
                slika = './steam-deck.jpg'

                ImeSlike = 'Steam Deck'

                tekst = 'Steam Deck je nova prenosiva gaming konzola koja se takmici sa Nintendo Switch-om, nudeći igračima mogućnost da igraju svoje omiljene PC igre na putu.'

            />

        </div>
        </>
    ) 
}

export default Pocetna
