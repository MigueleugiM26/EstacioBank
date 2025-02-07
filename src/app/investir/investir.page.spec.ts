import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InvestirPage } from './investir.page';

describe('InvestirPage', () => {
  let component: InvestirPage;
  let fixture: ComponentFixture<InvestirPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(InvestirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
