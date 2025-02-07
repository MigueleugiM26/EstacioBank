import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TransferirPixPage } from './transferir-pix.page';

describe('TransferirPixPage', () => {
  let component: TransferirPixPage;
  let fixture: ComponentFixture<TransferirPixPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TransferirPixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
