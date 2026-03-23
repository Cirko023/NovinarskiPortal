import './index.css'

function Kartica3({slika, ImeSlike, tekst}) {
    return(
        <>
            <div className='rounded-xl relative w-86 overflow-hidden'>
                <div>
                    <img src={slika} alt={ImeSlike} className='w-full h-116 object-cover hover:scale-107 transition-transform duration-600'/>
                    <div className='absolute h-15 left-0 right-0 bottom-0 flex justify-center bg-cyan-700/70'>
                    <p className='text-white font-bold text-2xl hover:underline mt-3'>{tekst}</p>
                    </div>
                </div>
            </div>
        </>

    )



}

export default Kartica3;

