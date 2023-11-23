import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestirTechvestPage } from './investir-techvest.page';

describe('InvestirTechvestPage', () => {
  let component: InvestirTechvestPage;
  let fixture: ComponentFixture<InvestirTechvestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvestirTechvestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
