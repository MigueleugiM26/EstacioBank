import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { doc, setDoc, Firestore, getFirestore } from 'firebase/firestore';
import { getDocs, getDoc, query, where } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { db } from "../main";
import { AuthService } from '../app/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FetchInfo {
  constructor(private authService: AuthService){}

  private auth = getAuth();
  private firestore = getFirestore(); 
  private usersCollectionRef = collection(this.firestore, 'users');

  nome: string | null = null; 
  sobrenome: string | null = null; 

  ngOnInit() {
    this.getNome();
  }
  
  getNome() {
    this.authService.getNome().then((nome) => {
      this.nome = nome;
    });
  }
}
