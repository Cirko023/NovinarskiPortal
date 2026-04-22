import './index.css'

function KarticaVest({slika, ImeSlike, tekst}) {
    return(
        <>
            <div className='w-96 h-126'>
                <div>
                    <img src={slika} alt={ImeSlike} className='rounded-xl hover:opacity-85 hover:scale-102 transition-transform duration-300'/>
                </div>

                <div className='py-2'>
                    <p className='font-bold hover:underline'>{tekst}</p>
                </div>
            </div>
        </>

    )



}

export default KarticaVest;

