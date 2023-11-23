import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investir-techvest',
  templateUrl: './investir-techvest.page.html',
  styleUrls: ['./investir-techvest.page.scss'],
})
export class InvestirTechvestPage implements OnInit {
  investirForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private investmentService: InvestmentService) {
    this.investirForm = this.formBuilder.group({
      quantia: ['', [Validators.required]],
    });
   }
  
  sucesso: number = 0; 
  lucro: number = 0; 

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getVariaveis();
  }

  goBack() {
    window.history.back();
  }

  getVariaveis () {
    const investment = this.investmentService.investimentos[1];
    const successRate = this.investmentService.getRandomNumberInRange(investment.sucesso);
    const profitRate = this.investmentService.getRandomNumberInRange(investment.lucro);
    this.sucesso = successRate;
    this.lucro = profitRate;
  }

  investir() {
    const quantia = this.investirForm.get('quantia')?.value!;

    this.investmentService.investMoney(quantia, this.sucesso, this.lucro, 1);
  }
}
