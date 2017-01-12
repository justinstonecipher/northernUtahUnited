/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CupRulesComponent } from './cup-rules.component';

describe('CupRulesComponent', () => {
  let component: CupRulesComponent;
  let fixture: ComponentFixture<CupRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
