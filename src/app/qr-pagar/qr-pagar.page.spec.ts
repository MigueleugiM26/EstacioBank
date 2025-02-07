import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { QrPagarPage } from './qr-pagar.page';

describe('QrPagarPage', () => {
  let component: QrPagarPage;
  let fixture: ComponentFixture<QrPagarPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(QrPagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
