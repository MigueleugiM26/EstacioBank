import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PerguntasFrequentesPage } from './perguntas-frequentes.page';

describe('PerguntasFrequentesPage', () => {
  let component: PerguntasFrequentesPage;
  let fixture: ComponentFixture<PerguntasFrequentesPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PerguntasFrequentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
