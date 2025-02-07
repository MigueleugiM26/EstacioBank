import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EmprestimosPage } from './emprestimos.page';

describe('EmprestimosPage', () => {
  let component: EmprestimosPage;
  let fixture: ComponentFixture<EmprestimosPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(EmprestimosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
