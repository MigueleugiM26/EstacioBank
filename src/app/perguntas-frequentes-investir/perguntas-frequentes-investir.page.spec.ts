import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerguntasFrequentesInvestirPage } from './perguntas-frequentes-investir.page';

describe('PerguntasFrequentesInvestirPage', () => {
  let component: PerguntasFrequentesInvestirPage;
  let fixture: ComponentFixture<PerguntasFrequentesInvestirPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerguntasFrequentesInvestirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
