import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PerguntasFrequentesInvestirPage } from './perguntas-frequentes-investir.page';

describe('PerguntasFrequentesInvestirPage', () => {
  let component: PerguntasFrequentesInvestirPage;
  let fixture: ComponentFixture<PerguntasFrequentesInvestirPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PerguntasFrequentesInvestirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
