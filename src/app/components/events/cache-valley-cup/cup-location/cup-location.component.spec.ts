/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CupLocationComponent } from './cup-location.component';

describe('CupLocationComponent', () => {
  let component: CupLocationComponent;
  let fixture: ComponentFixture<CupLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
