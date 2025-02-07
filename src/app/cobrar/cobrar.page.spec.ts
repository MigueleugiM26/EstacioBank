import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CobrarPage } from './cobrar.page';

describe('CobrarPage', () => {
  let component: CobrarPage;
  let fixture: ComponentFixture<CobrarPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CobrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
