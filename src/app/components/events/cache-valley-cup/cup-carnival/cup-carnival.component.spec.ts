/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CupCarnivalComponent } from './cup-carnival.component';

describe('CupCarnivalComponent', () => {
  let component: CupCarnivalComponent;
  let fixture: ComponentFixture<CupCarnivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupCarnivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupCarnivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
