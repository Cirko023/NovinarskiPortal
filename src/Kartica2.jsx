import './index.css'

function Kartica2({slika, ImeSlike, tekst}) {
    return (
        <div className='flex flex-row bg-slate-950/95 mb-10 rounded-[1.75rem] border border-slate-700 shadow-xl shadow-slate-950/40 overflow-hidden transition-transform duration-300 hover:-translate-y-1'>
            <div className='w-[20rem] h-[14rem] shrink-0 flex items-center justify-center bg-slate-800/80 overflow-hidden'>
                <img src={slika} alt={ImeSlike} className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' />
            </div>
            <div className='flex flex-1 items-center p-6 text-slate-100'>
                <p className='font-semibold text-base leading-7'>{tekst}</p>
            </div>
        </div>
    )
}

export default Kartica2;