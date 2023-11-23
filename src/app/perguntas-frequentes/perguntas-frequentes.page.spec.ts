import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerguntasFrequentesPage } from './perguntas-frequentes.page';

describe('PerguntasFrequentesPage', () => {
  let component: PerguntasFrequentesPage;
  let fixture: ComponentFixture<PerguntasFrequentesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerguntasFrequentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
