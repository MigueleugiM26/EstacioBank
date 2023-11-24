import { Injectable } from '@angular/core';
import { getFirestore, doc, getDoc, updateDoc, query, where, getDocs, collection } from 'firebase/firestore';
import { AuthService } from './auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
  })
  export class TransferService {
    private firestore = getFirestore();
    private usersCollectionRef = collection(this.firestore, 'users');
  
    constructor(private authService: AuthService, private alertController: AlertController) {}
  
    async transferMoney(recipient: string, amount: string): Promise<void> {
      const currentUserEmail = this.authService.getCurrentUser();
  
      if (!currentUserEmail) {
        return;
      }

      const normalizedAmount = amount.replace(/\./g, '').replace(',', '.');
      const numericAmount = parseFloat(normalizedAmount);
  
      try {
        const currentUserDocRef = doc(this.firestore, 'users', currentUserEmail);
        const currentUserDocSnap = await getDoc(currentUserDocRef);
  
        if (currentUserDocSnap.exists()) {
          const currentUserData = currentUserDocSnap.data();
          let currentUserDinheiro = Number(currentUserData?.['dinheiro']) || 0;

          if (isNaN(numericAmount)) {
            alert('Valor inválido.');
            return;
          }
  
          if (currentUserDinheiro < numericAmount) {
            alert("Dinheiro insuficiente.");
            return;
          }

          if (numericAmount <= 0) {
            alert("Valor inválido.");
            return;
          }
  
          let recipientQueryField = 'cpf';
          let recipientDocs = await getDocs(query(this.usersCollectionRef, where(recipientQueryField, '==', recipient)));

          if (recipientDocs.empty) {
            recipientQueryField = 'chaveAleatoria';
            recipientDocs = await getDocs(query(this.usersCollectionRef, where(recipientQueryField, '==', recipient)));
          }
  
          if (!recipientDocs.empty) {
            if (
              recipient === currentUserEmail ||
              recipient === currentUserData?.['cpf'] ||
              recipient === currentUserData?.['chaveAleatoria']
            ) {
              alert("Você não pode transferir dinheiro para você mesmo.");
              return;
            }

            const recipientData = recipientDocs.docs[0].data();
            const destinatario = `${recipientData['nome']} ${recipientData['sobrenome']}`;
            const cpf = recipientData['cpf'];
            const chaveAleatoria = recipientData['chaveAleatoria'];
            const quantia = numericAmount;
            const isConfirmed = await this.presentConfirmationAlert(quantia, destinatario, cpf, chaveAleatoria, 0);

            if (isConfirmed) {
              const recipientDocRef = recipientDocs.docs[0].ref;
              let recipientDinheiro = Number(recipientDocs.docs[0].data()['dinheiro']) || 0;
  
              currentUserDinheiro -= numericAmount;
              currentUserDinheiro = Math.round(currentUserDinheiro * 100) / 100;
              recipientDinheiro += numericAmount;
              recipientDinheiro = Math.round(recipientDinheiro * 100) / 100;

              await updateDoc(currentUserDocRef, {
                dinheiro: Number (currentUserDinheiro),
              });
                
              await updateDoc(recipientDocRef, {
                dinheiro: Number (recipientDinheiro),
              });
    
              alert("Transferência bem sucedida");
            }
            else {
              alert("A transferência não foi realizada.")
            }            
          } else {
            alert("Destinatário não encontrado");
          }
        } else {
          alert("Destinatário não encontrado");
        }
      } catch (error) {
        alert("Erro ao realizar a transferência: " + error);
      }
    }

    async presentConfirmationAlert(quantia: number, destinatario: string, cpf: string, chaveAleatoria: string, tipo: number): Promise<boolean> {
      return new Promise<boolean>(async (resolve) => {

      if (tipo == 0) {
        const formattedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

        const alert = await this.alertController.create({
          header: 'Confirmação',
          message: `
            Você vai transferir R$${quantia} para ${destinatario}.
            CPF: ${formattedCPF} | Chave Aleatória: ${chaveAleatoria}.
            Confirmar?
          `,
          buttons: [
            {
              text: 'Não',
              role: 'cancel',
              handler: () => {
                resolve(false);
              },
            },
            {
              text: 'Sim',
              handler: () => {
                resolve(true);
              },
            },
          ],
        });
    
        await alert.present();
      }

      if (tipo == 1) {
        const alert = await this.alertController.create({
          header: 'Confirmação',
          message: `
            Você vai receber um empréstimo de R$50,00.
            Confirmar?
          `,
          buttons: [
            {
              text: 'Não',
              role: 'cancel',
              handler: () => {
                resolve(false);
              },
            },
            {
              text: 'Sim',
              handler: () => {
                resolve(true);
              },
            },
          ],
        });
    
        await alert.present();
      }
        
      });
    }
    
    async emprestimo() {
      const currentUserEmail = this.authService.getCurrentUser();

      if (!currentUserEmail) {
        return;
      }

      try {
        const currentUserDocRef = doc(this.firestore, 'users', currentUserEmail);
        const currentUserDocSnap = await getDoc(currentUserDocRef);
  
        if (currentUserDocSnap.exists()) {
          const currentUserData = currentUserDocSnap.data();
          let currentUserDinheiro = Number(currentUserData?.['dinheiro']) || 0;
  
          if (currentUserDinheiro >= 50) {
            alert("Só é possível receber um empréstimo caso você tenha menos que R$50,00.");
            return;
          }
    
          const isConfirmed = await this.presentConfirmationAlert(0, "", "", "", 1);

            if (isConfirmed) {
              currentUserDinheiro += 50;

              await updateDoc(currentUserDocRef, {
                dinheiro: Math.round(currentUserDinheiro * 100) / 100,
              });
                    
              alert("Empréstimo realizado com sucesso.");
            }
          else {
            alert("O empréstimo não foi realizado.")
          }            
        }
      } catch (error) {
        alert("Erro ao receber o empréstimo: " + error);
      }
    }
  }