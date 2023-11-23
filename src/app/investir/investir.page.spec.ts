import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestirPage } from './investir.page';

describe('InvestirPage', () => {
  let component: InvestirPage;
  let fixture: ComponentFixture<InvestirPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvestirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
