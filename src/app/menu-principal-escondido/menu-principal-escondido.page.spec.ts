import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPrincipalEscondidoPage } from './menu-principal-escondido.page';

describe('MenuPrincipalEscondidoPage', () => {
  let component: MenuPrincipalEscondidoPage;
  let fixture: ComponentFixture<MenuPrincipalEscondidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuPrincipalEscondidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
