import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AreaPixPage } from './area-pix.page';

describe('AreaPixPage', () => {
  let component: AreaPixPage;
  let fixture: ComponentFixture<AreaPixPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AreaPixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
