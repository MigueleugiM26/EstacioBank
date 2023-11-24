import { Injectable } from '@angular/core';
import { getFirestore, doc, getDoc, updateDoc, query, where, getDocs, collection } from 'firebase/firestore';
import { AuthService } from './auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
  })
  export class InvestmentService {
    private firestore = getFirestore();
    private usersCollectionRef = collection(this.firestore, 'users');

    investimentos = [
        { nome: 'Estácio', sucesso: [26, 55], lucro: [100, 130] },
        { nome: 'Techvest', sucesso: [0, 25], lucro: [150, 200] },
        { nome: 'Ecogrow', sucesso: [60, 80], lucro: [40, 80] },
      ];
  
    constructor(private authService: AuthService, private alertController: AlertController) {}

    async investMoney(amount: number, sucess: number, profit: number, tipo: number) {
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
        
                if (currentUserDinheiro < amount) {
                    alert('Dinheiro insuficiente.');
                    return;
                }
        
                if (amount <= 0) {
                    alert('Valor inválido.');
                    return;
                }
        
                const isConfirmed = await this.presentConfirmationAlert(amount, sucess, profit, tipo);
                if (isConfirmed) {
                    const isSuccess = Math.random() <= sucess / 100;
                    const result = isSuccess ? amount * (1 + profit / 100) : 0;
                    const formattedResult = result.toFixed(2);
        
                    if (isSuccess) {
                      currentUserDinheiro += result;
                      currentUserDinheiro = Math.round(currentUserDinheiro * 100) / 100;

                      await updateDoc(currentUserDocRef, {
                          dinheiro: Number(currentUserDinheiro),
                      });

        
                        alert(`Investimento bem sucedido. Você ganhou R$${ formattedResult }.`);
                    } else {
                      currentUserDinheiro = Number(currentUserData?.['dinheiro']) || 0;
                      currentUserDinheiro -= Number (amount);
                      currentUserDinheiro = Number (Math.round(currentUserDinheiro * 100) / 100);

                      await updateDoc(currentUserDocRef, {
                          dinheiro: Number(currentUserDinheiro),
                      });
        
                        alert('Infelizmente, o investimento não foi bem sucedido desta vez. Mais sorte na próxima!');
                    }
                } else {
                    alert("O investimento não foi realizado.")
                }
            } else {
                alert('Usuário não encontrado');
            }
        } 
        catch (error) {
            alert('Erro ao realizar o investimento: ' + error);
        }
    }

    getRandomNumberInRange(range: number[]): number {
        const [min, max] = range;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }    

    async presentConfirmationAlert(quantia: number, sucesso: number, lucro: number, tipo: number): Promise<boolean> {
      return new Promise<boolean>(async (resolve) => {
        if (tipo == 0) {
            const alert = await this.alertController.create({
                header: 'Confirmação',
                message: `
                  Você vai investir R$${quantia} na Estácio.
                  Taxa de Sucesso: ${sucesso}% | Lucro: ${lucro}%.
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
                  Você vai investir R$${quantia} na TechVest.
                  Taxa de Sucesso: ${sucesso}% | Lucro: ${lucro}%.
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
        if (tipo == 2) {
            const alert = await this.alertController.create({
                header: 'Confirmação',
                message: `
                  Você vai investir R$${quantia} na EcoGrow.
                  Taxa de Sucesso: ${sucesso}% | Lucro: ${lucro}%.
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
    
  }