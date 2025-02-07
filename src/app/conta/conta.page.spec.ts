import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContaPage } from './conta.page';

describe('ContaPage', () => {
  let component: ContaPage;
  let fixture: ComponentFixture<ContaPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
