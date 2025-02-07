import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PerguntasFrequentesPagarPage } from './perguntas-frequentes-pagar.page';

describe('PerguntasFrequentesPagarPage', () => {
  let component: PerguntasFrequentesPagarPage;
  let fixture: ComponentFixture<PerguntasFrequentesPagarPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PerguntasFrequentesPagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
