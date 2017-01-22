/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StateCompTryoutsComponent } from './state-comp-tryouts.component';

describe('StateCompTryoutsComponent', () => {
  let component: StateCompTryoutsComponent;
  let fixture: ComponentFixture<StateCompTryoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCompTryoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCompTryoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
