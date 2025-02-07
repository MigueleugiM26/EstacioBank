import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HistoricoEscondidoPage } from './historico-escondido.page';

describe('HistoricoEscondidoPage', () => {
  let component: HistoricoEscondidoPage;
  let fixture: ComponentFixture<HistoricoEscondidoPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(HistoricoEscondidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
