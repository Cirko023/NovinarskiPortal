import './index.css'

function KarticaVest({ slika, ImeSlike, tekst }) {
    return (
        <div className='w-[24rem] rounded-[2rem] overflow-hidden bg-white/10 border border-white/10 backdrop-blur-xl shadow-2xl shadow-slate-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'>
            <div className='h-[20rem] bg-slate-800/70 flex items-center justify-center overflow-hidden'>
                <img
                    src={slika}
                    alt={ImeSlike}
                    className='max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105'
                />
            </div>
            <div className='p-5 bg-slate-950/70'>
                <p className='text-white font-semibold text-lg leading-7 hover:text-cyan-300 transition-colors duration-200'>{tekst}</p>
            </div>
        </div>
    )
}

export default KarticaVest;

