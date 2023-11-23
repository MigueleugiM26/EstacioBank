import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerguntasFrequentesDepositoPage } from './perguntas-frequentes-deposito.page';

describe('PerguntasFrequentesDepositoPage', () => {
  let component: PerguntasFrequentesDepositoPage;
  let fixture: ComponentFixture<PerguntasFrequentesDepositoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerguntasFrequentesDepositoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
