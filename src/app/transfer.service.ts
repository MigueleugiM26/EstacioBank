import { Injectable } from '@angular/core';
import { getFirestore, doc, getDoc, updateDoc, query, where, getDocs, collection } from 'firebase/firestore';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
  })
  export class TransferService {
    private firestore = getFirestore();
    private usersCollectionRef = collection(this.firestore, 'users');
  
    constructor(private authService: AuthService) {}
  
    async transferMoney(recipient: string, amount: number): Promise<void> {
      const currentUserEmail = this.authService.getCurrentUser();
  
      if (!currentUserEmail) {
        return;
      }
  
      try {
        const currentUserDocRef = doc(this.firestore, 'users', currentUserEmail);
        const currentUserDocSnap = await getDoc(currentUserDocRef);
  
        if (currentUserDocSnap.exists()) {
          const currentUserData = currentUserDocSnap.data();
  
          // Convert dinheiro to number
          const currentUserDinheiro = Number(currentUserData?.['dinheiro']) || 0;
  
          if (currentUserDinheiro < amount) {
            alert("Dinheiro insuficiente.");
            return;
          }
  

  
          // Check recipient by CPF
          let recipientQueryField = 'cpf';
          let recipientDocs = await getDocs(query(this.usersCollectionRef, where(recipientQueryField, '==', recipient)));
  
          // If recipient not found, try searching by chaveAleatoria
          if (recipientDocs.empty) {
            recipientQueryField = 'chaveAleatoria';
            recipientDocs = await getDocs(query(this.usersCollectionRef, where(recipientQueryField, '==', recipient)));
          }
  
          if (!recipientDocs.empty) {
            const recipientDocRef = recipientDocs.docs[0].ref;
  
            // Convert dinheiro to number
            const recipientDinheiro = Number(recipientDocs.docs[0].data()['dinheiro']) || 0;
  
            // Add the amount as a number and keep dinheiro as a number
            await updateDoc(currentUserDocRef, {
                dinheiro: currentUserDinheiro - amount, // Keep dinheiro as a number
              });
              
            await updateDoc(recipientDocRef, {
                dinheiro: Number(recipientDinheiro) + Number(amount), // Explicitly cast to numbers
              });
  
            alert("Transferência bem sucedida");
          } else {
            alert("Ocorreu um erro ao realizar a transferência");
          }
        } else {
          alert("Destinatário não encontrado");
        }
      } catch (error) {
        alert("Erro ao realizar a transferência: " + error);
      }
    }
  }