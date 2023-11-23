import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaPixPage } from './area-pix.page';

describe('AreaPixPage', () => {
  let component: AreaPixPage;
  let fixture: ComponentFixture<AreaPixPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AreaPixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
