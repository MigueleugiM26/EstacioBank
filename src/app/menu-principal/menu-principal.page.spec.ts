import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MenuPrincipalPage } from './menu-principal.page';

describe('MenuPrincipalPage', () => {
  let component: MenuPrincipalPage;
  let fixture: ComponentFixture<MenuPrincipalPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(MenuPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
