import './index.css'

function Kartica2({slika, ImeSlike, tekst}) {
    return(
        <>
            <div className='flex flex-row bg-gray-700 mb-10 rounded-xl hover:scale-102 transition-transform duration-300'>
                <div className='px-1 w-86 h-48 pl-0'>
                    <img src={slika} alt={ImeSlike} className='rounded-xl hover:opacity-85 hover:scale-102 transition-transform duration-300'/>
                </div>

                <div className='px-2 mt-15 w-180 text-white'>
                    <p className='font-bold hover:underline'>{tekst}</p>
                </div>
            </div>
        </>

    )



}

export default Kartica2;

