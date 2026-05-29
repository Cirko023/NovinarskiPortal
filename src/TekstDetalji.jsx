import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import DOMPurify from 'dompurify';

function TekstDetalji() {
    const { id } = useParams();
    const [tekst, setTekst] = useState(null);

    useEffect(() => {
        const fetchTekst = async () => {
            const docRef = doc(db, 'tekstovi', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setTekst(docSnap.data());
            }
        };
        fetchTekst();
    }, [id]);

    if (!tekst) return (
        <div className='flex justify-center items-center mt-60'>
            <p className='text-gray-400 text-xl animate-pulse'>Učitava...</p>
        </div>
    );

    return (
        <div className='max-w-4xl mx-auto px-6 mt-40 mb-20'>

            {/* Na vrhu stranice prikazuje neki bubble u kom pise kategorija */}
            <span className='bg-gray-700 text-gray-300 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-widest'>
                {tekst.kategorija}
            </span>

            {/* Naslov same vesti */}
            <h1 className='text-5xl font-bold mt-5 mb-3 leading-tight'>
                {tekst.naslov}
            </h1>

            {/* Autor i datum */}
            <div className='flex gap-4 text-gray-700 text-sm mb-10 border-b border-gray-300 pb-6'>
                <span>✍️ {tekst.autor}</span>
                {tekst.vremeKreiranja && (
                    <span>📅 {tekst.vremeKreiranja.toDate().toLocaleDateString('sr-RS')}</span>
                )}
            </div>
            
            {/* Sadržaj same vesti - detalji neke vesti sa tailwind css prose plugin*/}
            <div
                className='prose prose-lg max-w-none
                    overflow-x-hidden break-normal
                    prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                    prose-p:leading-relaxed prose-p:mb-5
                    prose-img:rounded-xl prose-img:w-full prose-img:my-8
                    prose-a:text-cyan-600 prose-a:underline
                    prose-strong:font-bold
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6'
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(tekst.sadrzaj.replace(/&nbsp;/g, ' ')) }}
            />
        </div>
    );
}

export default TekstDetalji;