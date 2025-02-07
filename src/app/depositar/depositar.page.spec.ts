import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DepositarPage } from './depositar.page';

describe('DepositarPage', () => {
  let component: DepositarPage;
  let fixture: ComponentFixture<DepositarPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DepositarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
