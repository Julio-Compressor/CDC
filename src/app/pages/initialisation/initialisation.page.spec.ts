import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitialisationPage } from './initialisation.page';

describe('InitialisationPage', () => {
  let component: InitialisationPage;
  let fixture: ComponentFixture<InitialisationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
