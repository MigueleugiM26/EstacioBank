import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PerguntasFrequentesAreaPixPage } from './perguntas-frequentes-area-pix.page';

describe('PerguntasFrequentesAreaPixPage', () => {
  let component: PerguntasFrequentesAreaPixPage;
  let fixture: ComponentFixture<PerguntasFrequentesAreaPixPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PerguntasFrequentesAreaPixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
