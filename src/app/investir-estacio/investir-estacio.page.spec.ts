import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestirEstacioPage } from './investir-estacio.page';

describe('InvestirEstacioPage', () => {
  let component: InvestirEstacioPage;
  let fixture: ComponentFixture<InvestirEstacioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvestirEstacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
