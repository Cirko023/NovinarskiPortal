import './index.css'

function KarticaVest({slika, ImeSlike, tekst}) {
    return(
        <>
            <div className='w-96 h-126'>
                <div>
                    <img src={slika} alt={ImeSlike}/>
                </div>

                <div>
                    <p>{tekst}</p>
                </div>
            </div>
        </>

    )



}

export default KarticaVest;

