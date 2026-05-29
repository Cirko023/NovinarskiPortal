import './index.css'

function Kartica3({ slika, ImeSlike, tekst }) {
    return (
        <div className='relative w-[22rem] h-[21rem] rounded-[2rem] overflow-hidden bg-white/10 border border-white/10 backdrop-blur-xl shadow-2xl shadow-slate-950/30 transition-all duration-300 hover:-translate-y-1'>
            <div className='h-full w-full bg-slate-800/70 flex items-center justify-center overflow-hidden'>
                <img
                    src={slika}
                    alt={ImeSlike}
                    className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
                />
            </div>
            <div className='absolute inset-x-0 bottom-0 bg-slate-950/80 p-4 backdrop-blur-md'>
                <p className='text-white font-bold text-xl leading-6'>{tekst}</p>
            </div>
        </div>
    )
}

export default Kartica3;

