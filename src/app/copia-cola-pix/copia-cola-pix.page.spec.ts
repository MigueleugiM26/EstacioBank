import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopiaColaPixPage } from './copia-cola-pix.page';

describe('CopiaColaPixPage', () => {
  let component: CopiaColaPixPage;
  let fixture: ComponentFixture<CopiaColaPixPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CopiaColaPixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
