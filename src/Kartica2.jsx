import './index.css'

function Kartica2({slika, ImeSlike, tekst}) {
    return(
        <div className='flex flex-row bg-gray-700 mb-10 rounded-xl hover:scale-102 transition-transform duration-300 overflow-hidden'>
            <div className='w-86 h-48 shrink-0'>
                <img src={slika} alt={ImeSlike} className='w-full h-full object-cover'/>
            </div>
            <div className='px-5 flex items-center w-180 text-white'>
                <p className='font-bold hover:underline'>{tekst}</p>
            </div>
        </div>
    )
}

export default Kartica2;