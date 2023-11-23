import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkPagarPage } from './link-pagar.page';

describe('LinkPagarPage', () => {
  let component: LinkPagarPage;
  let fixture: ComponentFixture<LinkPagarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LinkPagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
