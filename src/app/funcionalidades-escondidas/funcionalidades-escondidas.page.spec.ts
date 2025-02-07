import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FuncionalidadesEscondidasPage } from './funcionalidades-escondidas.page';

describe('FuncionalidadesEscondidasPage', () => {
  let component: FuncionalidadesEscondidasPage;
  let fixture: ComponentFixture<FuncionalidadesEscondidasPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(FuncionalidadesEscondidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
