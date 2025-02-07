import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PerguntasFrequentesCobrarPage } from './perguntas-frequentes-cobrar.page';

describe('PerguntasFrequentesCobrarPage', () => {
  let component: PerguntasFrequentesCobrarPage;
  let fixture: ComponentFixture<PerguntasFrequentesCobrarPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PerguntasFrequentesCobrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
