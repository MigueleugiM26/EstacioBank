import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TransferirPage } from './transferir.page';

describe('TransferirPage', () => {
  let component: TransferirPage;
  let fixture: ComponentFixture<TransferirPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TransferirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
