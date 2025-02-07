import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { QrCobrarPage } from './qr-cobrar.page';

describe('QrCobrarPage', () => {
  let component: QrCobrarPage;
  let fixture: ComponentFixture<QrCobrarPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(QrCobrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
