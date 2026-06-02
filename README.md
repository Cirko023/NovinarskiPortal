# Novinarski Portal

Novinarski web portal za objavljivanje i čitanje tehnoloških vesti, razvijen kao seminarski rad na Tehničkom fakultetu "Mihajlo Pupin" u Zrenjaninu.

## O projektu

Portal omogućava čitanje tekstova iz oblasti hardvera, softvera, video igara, mobilnih uređaja, tehničkih saveta i tehnoloških događaja. Registrovani korisnici mogu pisati, uređivati i brisati sopstvene tekstove kroz bogati text editor.

## Tehnologije

- **React 18** – frontend biblioteka
- **React Router v6** – klijentski routing
- **Tailwind CSS v4** – stilizovanje
- **Firebase Firestore** – baza podataka u realnom vremenu
- **Firebase Authentication** – autentifikacija korisnika
- **Firebase Storage** – čuvanje slika
- **ReactQuill** – rich text editor
- **DOMPurify** – sanitizacija HTML sadržaja
- **Vite** – build alat

## Funkcionalnosti

- Pregled tekstova po kategorijama: Hardver, Video Igre, Tips & Tricks, Softver, Mobilni Uređaji, Događaji
- Pretraga tekstova po naslovu u realnom vremenu
- Registracija i prijava korisnika
- Dodavanje tekstova sa slikama i formatiranjem
- Izmena i brisanje sopstvenih tekstova
- Prikaz detalja svakog teksta na posebnoj stranici

## Pokretanje projekta

### Preduslovi

- Node.js 20+
- npm 10+
- Firebase projekat sa aktiviranim Firestore, Authentication i Storage servisima

### Instalacija

```bash
git clone https://github.com/Cirko023/NovinarskiPortal.git
cd NovinarskiPortal
npm install
```

### Firebase konfiguracija

Kreiraj fajl `src/firebase.js` sa podacima svog Firebase projekta:

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
```

### Pokretanje

```bash
npm run dev
```

Aplikacija se pokreće na `http://localhost:5173`


## Tim

| Ime | GitHub | Indeks |
|-----|--------|--------|
| Uroš Milin | [@Babuta3](https://github.com/Babuta3) | SI 20/22 |
| Petar Kerčov | [@PetarKercov](https://github.com/PetarKercov) | SI 10/22 |
| Jovan Ćirić | [@Cirko023](https://github.com/Cirko023) | SI 18/22 |
