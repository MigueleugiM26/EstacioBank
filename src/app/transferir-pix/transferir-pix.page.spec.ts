import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferirPixPage } from './transferir-pix.page';

describe('TransferirPixPage', () => {
  let component: TransferirPixPage;
  let fixture: ComponentFixture<TransferirPixPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransferirPixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
