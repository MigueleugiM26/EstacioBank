import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CopiaColaPixPage } from './copia-cola-pix.page';

describe('CopiaColaPixPage', () => {
  let component: CopiaColaPixPage;
  let fixture: ComponentFixture<CopiaColaPixPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CopiaColaPixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
