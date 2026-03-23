import './index.css'

function Kartica2({slika, ImeSlike, tekst}) {
    return(
        <>
            <div className='flex flex-row'>
                <div className='px-2 w-86 h-56'>
                    <img src={slika} alt={ImeSlike} className='rounded-xl hover:opacity-85 hover:scale-102 transition-transform duration-300'/>
                </div>

                <div className='px-2 mt-13 w-150'>
                    <p className='font-bold hover:underline'>{tekst}</p>
                </div>
            </div>
        </>

    )



}

export default Kartica2;

