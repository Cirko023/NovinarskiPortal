import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { db, auth } from './firebase';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import DOMPurify from 'dompurify';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

function TekstDetalji() {
    const { id } = useParams();
    const [tekst, setTekst] = useState(null);
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [noviNaslov, setNoviNaslov] = useState('');
    const [noviSadrzaj, setNoviSadrzaj] = useState('');
    const quillRef = useRef(null);

    useEffect(() => {
        const fetchTekst = async () => {
            const docRef = doc(db, 'tekstovi', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setTekst(docSnap.data());
            }
        };
        fetchTekst();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe;
    }, [id]);

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.onchange = async () => {
            const file = input.files[0];
            if (!file) return;
            try {
                const storageRef = ref(storage, `slike/${Date.now()}-${file.name}`);
                await uploadBytes(storageRef, file);
                const url = await getDownloadURL(storageRef);
                const quill = quillRef.current.getEditor();
                const range = quill.getSelection();
                quill.insertEmbed(range.index, 'image', url);
            // eslint-disable-next-line no-unused-vars
            } catch (error) {
                alert('Greška pri uploadu slike');
            }
        };
    };

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image']
            ],
            handlers: { image: imageHandler }
        }
    };

    const handleEdit = () => {
        setNoviNaslov(tekst.naslov);
        setNoviSadrzaj(tekst.sadrzaj);
        setEditMode(true);
    };

    const handleSave = async () => {
        try {
            await updateDoc(doc(db, 'tekstovi', id), {
                naslov: noviNaslov,
                sadrzaj: noviSadrzaj,
                vremeIzmene: serverTimestamp()
            });
            setTekst(prev => ({ ...prev, naslov: noviNaslov, sadrzaj: noviSadrzaj }));
            setEditMode(false);
        } catch (error) {
            alert('Greška pri čuvanju: ' + error.message);
        }
    };

    if (!tekst) return (
        <div className='flex justify-center items-center mt-60'>
            <p className='text-gray-400 text-xl animate-pulse'>Učitava...</p>
        </div>
    );

    return (
        <div className='max-w-4xl mx-auto px-6 mt-40 mb-20'>
            <div className='flex justify-between items-center'>
                <span className='bg-gray-700 text-gray-300 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-widest'>
                    {tekst.kategorija}
                </span>
                {/* Edit dugme — vidljivo samo ulogovanim */}
                {user && !editMode && (
                    <button
                        onClick={handleEdit}
                        className='bg-gray-700 text-white px-4 py-2 rounded-xl border border-gray-600 hover:bg-gray-600 transition-colors duration-200 text-sm font-bold'
                    >
                        Izmeni tekst
                    </button>
                )}
            </div>

            {editMode ? (
                <div className='flex flex-col gap-4 mt-5'>
                    <input
                        type='text'
                        value={noviNaslov}
                        onChange={(e) => setNoviNaslov(e.target.value)}
                        className='p-3 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:border-gray-400 text-2xl font-bold'
                    />
                    <div className='rounded-xl overflow-hidden border border-gray-600'>
                        <ReactQuill
                            ref={quillRef}
                            theme='snow'
                            value={noviSadrzaj}
                            onChange={setNoviSadrzaj}
                            modules={modules}
                            className='bg-white'
                        />
                    </div>
                    <div className='flex gap-3'>
                        <button
                            onClick={handleSave}
                            className='bg-gray-700 text-white px-6 py-2 rounded-xl border border-gray-600 hover:bg-gray-600 transition-colors duration-200 font-bold'
                        >
                            Sačuvaj
                        </button>
                        <button
                            onClick={() => setEditMode(false)}
                            className='bg-transparent text-gray-500 px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition-colors duration-200 font-bold'
                        >
                            Otkaži
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <h1 className='text-5xl font-bold mt-5 mb-3 leading-tight'>
                        {tekst.naslov}
                    </h1>
                    <div className='flex gap-4 text-gray-700 text-sm mb-10 border-b border-gray-300 pb-6'>
                        <span>✍️ {tekst.autor}</span>
                        {tekst.vremeKreiranja && (
                            <span>📅 {tekst.vremeKreiranja.toDate().toLocaleDateString('sr-RS')}</span>
                        )}
                    </div>
                    <div
                        className='prose prose-lg max-w-none
                        overflow-x-hidden break-normal
                        prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                        prose-p:leading-relaxed prose-p:mb-5
                        prose-img:rounded-xl prose-img:w-full prose-img:my-8
                        prose-a:text-cyan-600 prose-a:underline
                        prose-strong:font-bold
                        prose-ul:list-disc prose-ul:pl-6
                        prose-ol:list-decimal prose-ol:pl-6
                        [&_p]:mb-1 [&_p]:leading-relaxed [&_p:empty]:h-4'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(tekst.sadrzaj.replace(/&nbsp;/g, ' ')) }}
                    />
                </>
            )}
        </div>
    );
}

export default TekstDetalji;