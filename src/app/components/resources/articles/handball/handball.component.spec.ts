/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HandballComponent } from './handball.component';

describe('HandballComponent', () => {
  let component: HandballComponent;
  let fixture: ComponentFixture<HandballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
