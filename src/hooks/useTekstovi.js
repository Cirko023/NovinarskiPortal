import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

function useTekstovi(kategorija = null) {
    const [tekstovi, setTekstovi] = useState([]);

    useEffect(() => {
        const fetchTekstovi = async () => {
            const q = kategorija
                ? query(collection(db, 'tekstovi'), where('kategorija', '==', kategorija))
                : collection(db, 'tekstovi');
            const querySnapshot = await getDocs(q);
            const lista = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setTekstovi(lista);
        };
        fetchTekstovi();
    }, [kategorija]);

    return tekstovi;
}

export default useTekstovi;