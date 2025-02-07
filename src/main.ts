import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCFCX4dE2nZMjnfEITsRy0iGnp2iXa9JoM',
  authDomain: 'estacio-bank.firebaseapp.com',
  projectId: 'estacio-bank',
  storageBucket: 'estacio-bank.appspot.com',
  messagingSenderId: '440509754854',
  appId: '1:440509754854:web:0ee79bb0f43a640086fa27',
  measurementId: 'G-NP7ZBVDYJ4',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));

const auth = getAuth();
const button = document.querySelector('button');

onAuthStateChanged(auth, (user) => {
  if (user == null) {
    return;
  }
  console.log(user);
});

button?.addEventListener('click', (clickEvent) => {
  signInWithRedirect(auth, new GoogleAuthProvider());
});
