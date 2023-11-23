import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestirEcogrowPage } from './investir-ecogrow.page';

describe('InvestirEcogrowPage', () => {
  let component: InvestirEcogrowPage;
  let fixture: ComponentFixture<InvestirEcogrowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvestirEcogrowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
