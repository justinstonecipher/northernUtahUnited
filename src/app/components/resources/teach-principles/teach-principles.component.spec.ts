/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeachPrinciplesComponent } from './teach-principles.component';

describe('TeachPrinciplesComponent', () => {
  let component: TeachPrinciplesComponent;
  let fixture: ComponentFixture<TeachPrinciplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachPrinciplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
