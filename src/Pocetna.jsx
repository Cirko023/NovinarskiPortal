import './index.css'
import KarticaVest from './KarticaVest.jsx';

function Pocetna() {
    return(
        <>

        <div class='flex flex-row justify-center items-center gap-10 mt-40'> 
           
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
        </>
    ) 
}

export default Pocetna
