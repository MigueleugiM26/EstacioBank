import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContaEscondidaPage } from './conta-escondida.page';

describe('ContaEscondidaPage', () => {
  let component: ContaEscondidaPage;
  let fixture: ComponentFixture<ContaEscondidaPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ContaEscondidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
