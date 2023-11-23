import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrPagarPage } from './qr-pagar.page';

describe('QrPagarPage', () => {
  let component: QrPagarPage;
  let fixture: ComponentFixture<QrPagarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrPagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
