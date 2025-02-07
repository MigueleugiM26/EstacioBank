import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LinkCobrarPage } from './link-cobrar.page';

describe('LinkCobrarPage', () => {
  let component: LinkCobrarPage;
  let fixture: ComponentFixture<LinkCobrarPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LinkCobrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
