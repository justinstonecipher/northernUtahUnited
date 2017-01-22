/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UysaChangesComponent } from './uysa-changes.component';

describe('UysaChangesComponent', () => {
  let component: UysaChangesComponent;
  let fixture: ComponentFixture<UysaChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UysaChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UysaChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
