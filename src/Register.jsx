import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Lozinke se ne poklapaju!');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                createdAt: new Date()
            });

            alert('Uspešno ste se registrovali!');
            navigate('/');
        } catch (error) {
            alert('Greška pri registraciji: ' + error.message);
        }
    };

    return (
        <div className='flex flex-col items-center mt-40'>
            <div className='flex items-center border-b border-gray-400 mb-7'>
                <p className='font-bold text-4xl mb-1'>REGISTRACIJA</p>
            </div>

            <form onSubmit={handleRegister} className='flex flex-col gap-4 w-80'>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-2 border border-gray-300 rounded'
                    required
                />
                <input
                    type='password'
                    placeholder='Lozinka'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-2 border border-gray-300 rounded'
                    required
                />
                <input
                    type='password'
                    placeholder='Potvrdi lozinku'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='p-2 border border-gray-300 rounded'
                    required
                />
                <button
                    type='submit'
                    className='bg-green-500 text-white p-2 rounded hover:bg-green-600'
                >
                    Registruj se
                </button>
            </form>
        </div>
    );
}

export default Register;