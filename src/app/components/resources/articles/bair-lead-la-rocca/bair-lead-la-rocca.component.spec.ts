/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BairLeadLaRoccaComponent } from './bair-lead-la-rocca.component';

describe('BairLeadLaRoccaComponent', () => {
  let component: BairLeadLaRoccaComponent;
  let fixture: ComponentFixture<BairLeadLaRoccaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BairLeadLaRoccaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BairLeadLaRoccaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
