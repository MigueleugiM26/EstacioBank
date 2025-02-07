import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PagarPage } from './pagar.page';

describe('PagarPage', () => {
  let component: PagarPage;
  let fixture: ComponentFixture<PagarPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
