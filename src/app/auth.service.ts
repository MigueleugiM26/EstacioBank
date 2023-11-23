import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { getDocs, getDoc, query, where } from 'firebase/firestore';
import { collection } from "firebase/firestore"; 
import { db } from "../main";

let currentUser: string | "";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth();
  private firestore = getFirestore(); 
  private usersCollectionRef = collection(this.firestore, 'users');

  private nome: string | undefined;
  private sobrenome: string | undefined;
  private cpf: string | undefined;
  private email: string | undefined;
  private chaveAleatoria: string | undefined;
  private numCartao: string | undefined;
  private conta: string | undefined;
  private cvv: string | undefined;
  private validade: string | undefined;
  private dinheiro: number | undefined;

  register(nome: string, sobrenome: string, cpf: string, email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(async (userCredential: UserCredential) => {
        const user = userCredential.user;

        try {
          const chaveAleatoria = await this.makeChaveAleatoria();
          const numeroCartao = await this.makeNumCartaoAleatorio();
          const conta = await this.makeContaAleatoria();
          const cvv = await this.makeCVVAleatorio();
          const validade = this.calculateExpirationDate();
          const validadeString = validade.toLocaleDateString('pt-BR'); 

          const docRef = doc(db, 'users', email);
          await setDoc(docRef, {
            nome,
            sobrenome,
            cpf,
            email,
            chaveAleatoria,
            numeroCartao,
            conta,
            cvv,
            validade: validadeString,
            dinheiro: 100,
          });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      });
  }

  async makeChaveAleatoria(): Promise<string> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
 
    while (true) {
      
      let result = '';
  
      for (let i = 0; i < 9; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      result += '-';
  
      for (let i = 0; i < 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      
      const isUnique = await this.isChaveAleatoriaUnique(result);
        
      if (isUnique) {
        return result;
      }
    }
  }
  
  async isChaveAleatoriaUnique(chaveAleatoria: string): Promise<boolean> {
    const querySnapshot = await getDocs(query(this.usersCollectionRef, where('chaveAleatoria', '==', chaveAleatoria)));
    return querySnapshot.empty;
  }

  async makeNumCartaoAleatorio(): Promise<string> {
    const characters = '0123456789';
    const charactersLength = characters.length;
 
    while (true) {
      
      let result = '';
  
      for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        if (j < 3) { result += ' '; }
      }
        
      const isUnique = await this.isNumCartaoUnique(result);
        
      if (isUnique) {
        return result;
      }
    }
  }
  
  async isNumCartaoUnique(conta: string): Promise<boolean> {
    const querySnapshot = await getDocs(query(this.usersCollectionRef, where('conta', '==', conta)));
    return querySnapshot.empty;
  }

  async makeContaAleatoria(): Promise<string> {
    const characters = '0123456789';
    const charactersLength = characters.length;
 
    while (true) {
      
      let result = '';
  
      for (let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      result += ' '; 

      for (let i = 0; i < 12; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      result += '-'; 
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
              
      const isUnique = await this.isContaUnique(result);
        
      if (isUnique) {
        return result;
      }
    }
  }
  
  async isContaUnique(conta: string): Promise<boolean> {
    const querySnapshot = await getDocs(query(this.usersCollectionRef, where('conta', '==', conta)));
    return querySnapshot.empty;
  }

  async makeCVVAleatorio(): Promise<string> {
    const characters = '0123456789';
    const charactersLength = characters.length;
 
    while (true) {
      
      let result = '';
  
      for (let i = 0; i < 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
        
      const isUnique = await this.isCVVUnique(result);
        
      if (isUnique) {
        return result;
      }
    }
  }
  
  async isCVVUnique(cvv: string): Promise<boolean> {
    const querySnapshot = await getDocs(query(this.usersCollectionRef, where('cvv', '==', cvv)));
    return querySnapshot.empty;
  }

  async isCPFUnique(cpf: string): Promise<boolean> {
    const querySnapshot = await getDocs(query(this.usersCollectionRef, where('cpf', '==', cpf)));
    return querySnapshot.empty;
  }

  calculateExpirationDate() {
    const currentDate = new Date();
    const expirationYear = currentDate.getFullYear() + 5;
    const expirationMonth = currentDate.getMonth() + 1; // Months are zero-based
    const expirationDay = currentDate.getDate();

    let expirationDate;
    expirationDate = new Date(expirationYear, expirationMonth, expirationDay);
    return expirationDate;
  }
  
  async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password)
    currentUser = email;
  }

  async getSaldo () {
    const userDocRef = doc(this.firestore, 'users', currentUser);
    const userDocSnap = await getDoc(userDocRef);
     
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const saldo = userData?.['dinheiro'] || null;
      this.dinheiro = saldo;
      return saldo;
    } else {
      return null;
    }
  }

  async getNome () {
    const userDocRef = doc(this.firestore, 'users', currentUser);
    const userDocSnap = await getDoc(userDocRef);
     
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const nome = userData?.['nome'] || null;
      this.nome = nome;
      return nome;
    } else {
      return null;
    }
  }

  async getSobrenome () {
    const userDocRef = doc(this.firestore, 'users', currentUser);
    const userDocSnap = await getDoc(userDocRef);
     
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const sobrenome = userData?.['sobrenome'] || null;
      this.sobrenome = sobrenome;
      return sobrenome;
    } else {
      return null;
    }
  }

  async getNumCartao () {
    const userDocRef = doc(this.firestore, 'users', currentUser);
    const userDocSnap = await getDoc(userDocRef);
     
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const numCartao = userData?.['numeroCartao'] || null;
      this.numCartao = numCartao;
      return numCartao;
    } else {
      return null;
    }
  }

  async getValidade () {
    const userDocRef = doc(this.firestore, 'users', currentUser);
    const userDocSnap = await getDoc(userDocRef);
     
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const validade = userData?.['validade'] || null;
      this.validade = validade;
      return validade;
    } else {
      return null;
    }
  }
  
  async getConta () {
    const userDocRef = doc(this.firestore, 'users', currentUser);
    const userDocSnap = await getDoc(userDocRef);
     
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const conta = userData?.['conta'] || null;
      this.conta = conta;
      return conta;
    } else {
      return null;
    }
  }

  async getCVV () {
    const userDocRef = doc(this.firestore, 'users', currentUser);
    const userDocSnap = await getDoc(userDocRef);
     
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const cvv = userData?.['cvv'] || null;
      this.cvv = cvv;
      return cvv;
    } else {
      return null;
    }
  }

  async getCPF () {
    const userDocRef = doc(this.firestore, 'users', currentUser);
    const userDocSnap = await getDoc(userDocRef);
     
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const cpf = userData?.['cpf'] || null;
      const formattedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      this.cpf = formattedCPF;
      return formattedCPF;
    } else {
      return null;
    }
  }

  async getRawCPF () {
    const userDocRef = doc(this.firestore, 'users', currentUser);
    const userDocSnap = await getDoc(userDocRef);
     
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const cpf = userData?.['cpf'] || null;
      return cpf;
    } else {
      return null;
    }
  }

  async getChaveAleatoria () {
    const userDocRef = doc(this.firestore, 'users', currentUser);
    const userDocSnap = await getDoc(userDocRef);
     
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const chaveAleatoria = userData?.['chaveAleatoria'] || null;
      this.chaveAleatoria = chaveAleatoria;
      return chaveAleatoria;
    } else {
      return null;
    }
  }

  update (){
    this.getSaldo();
    this.getNome;
    this.getSobrenome;
    this.getCPF;
    this.getNumCartao;
    this.getValidade;
    this.getConta;
    this.getChaveAleatoria;
    this.getCVV;
  }

  getCurrentUser () {
    return currentUser;
  }
}
