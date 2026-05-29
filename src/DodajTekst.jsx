import { useState, useEffect } from 'react';
import { db, auth } from './firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

function DodajTekst() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [naslov, setNaslov] = useState('');
    const [sadrzaj, setSadrzaj] = useState('');
    const [kategorija, setKategorija] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (!currentUser) {
                navigate('/login');
            }
        });
        return unsubscribe;
    }, [navigate]);

    if (loading) return null;
    if (!user) return null;

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
                toast.error('Greška pri uploadu slike');
            }
        };
    };

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ align: [] }],
                ['link', 'image']
            ],
            handlers: { image: imageHandler }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!kategorija) {
            alert('Molimo izaberite kategoriju!');
            return;
        }
        try {
            await addDoc(collection(db, 'tekstovi'), {
                naslov,
                sadrzaj,
                kategorija,
                autor: user.email,
                autorId: user.uid,
                vremeKreiranja: serverTimestamp(),
                vremeIzmene: serverTimestamp()
            });
            alert('Tekst je uspešno dodat!');
            setNaslov('');
            setSadrzaj('');
            setKategorija('');
        } catch (error) {
            alert('Greška pri dodavanju teksta: ' + error.message);
        }
    };

    return (
        <div className='flex flex-col items-center mt-40'>
            <div className='flex items-center border-b border-gray-400 mb-7'>
                <p className='font-bold text-4xl mb-1'>DODAJ NOVI TEKST</p>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-2xl'>
                <input
                    type='text'
                    placeholder='Naslov teksta'
                    value={naslov}
                    onChange={(e) => setNaslov(e.target.value)}
                    className='p-2 border border-gray-300 rounded'
                    required
                />

                <select
                    value={kategorija}
                    onChange={(e) => setKategorija(e.target.value)}
                    className='p-2 border border-gray-300 rounded'
                >
                    <option value=''>Izaberite kategoriju</option>
                    <option value='hardver'>Hardver PC</option>
                    <option value='igrice'>Video Igre</option>
                    <option value='tipsandtricks'>Tips & Tricks</option>
                    <option value='telefoni'>Mobilni Uređaji</option>
                    <option value='softver'>Softver</option>
                    <option value='dogadjaji'>Eventi</option>
                </select>
                <div className='rounded-xl overflow-hidden border border-gray-600 text-center'>
                    <ReactQuill
                        ref={quillRef}
                        theme="snow"
                        value={sadrzaj}
                        onChange={setSadrzaj}
                        modules={modules}
                        className='bg-white'
                    />
                </div>

                <textarea
                    placeholder='Sadržaj teksta'
                    value={sadrzaj}
                    onChange={(e) => setSadrzaj(e.target.value)}
                    className='p-2 border border-gray-300 rounded h-64 resize-vertical'
                    required
                />

                <button
                    type='submit'
                    className='bg-green-500 text-white p-2 rounded hover:bg-green-600'
                >
                    Dodaj tekst
                </button>
            </form>
        </div>
    );
}

export default DodajTekst;