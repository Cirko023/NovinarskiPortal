import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Uspešno ste se prijavili!');
            navigate('/');
        } catch (error) {
            alert('Greška pri prijavi: ' + error.message);
        }
    };

    return (
        <div className='flex flex-col items-center mt-40'>
            <div className='flex items-center border-b border-gray-400 mb-7'>
                <p className='font-bold text-4xl mb-1'>PRIJAVA</p>
            </div>

            <form onSubmit={handleLogin} className='flex flex-col gap-4 w-80'>
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
                <button
                    type='submit'
                    className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
                >
                    Prijavi se
                </button>
            </form>
        </div>
    );
}

export default Login;