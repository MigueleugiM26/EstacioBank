import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContaEscondidaPage } from './conta-escondida.page';

describe('ContaEscondidaPage', () => {
  let component: ContaEscondidaPage;
  let fixture: ComponentFixture<ContaEscondidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContaEscondidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
