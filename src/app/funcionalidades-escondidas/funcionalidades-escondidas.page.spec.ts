import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionalidadesEscondidasPage } from './funcionalidades-escondidas.page';

describe('FuncionalidadesEscondidasPage', () => {
  let component: FuncionalidadesEscondidasPage;
  let fixture: ComponentFixture<FuncionalidadesEscondidasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FuncionalidadesEscondidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
