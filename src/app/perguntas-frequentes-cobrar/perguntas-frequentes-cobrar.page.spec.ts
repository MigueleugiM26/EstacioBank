import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerguntasFrequentesCobrarPage } from './perguntas-frequentes-cobrar.page';

describe('PerguntasFrequentesCobrarPage', () => {
  let component: PerguntasFrequentesCobrarPage;
  let fixture: ComponentFixture<PerguntasFrequentesCobrarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerguntasFrequentesCobrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
