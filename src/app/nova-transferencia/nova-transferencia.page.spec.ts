import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NovaTransferenciaPage } from './nova-transferencia.page';

describe('NovaTransferenciaPage', () => {
  let component: NovaTransferenciaPage;
  let fixture: ComponentFixture<NovaTransferenciaPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(NovaTransferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
