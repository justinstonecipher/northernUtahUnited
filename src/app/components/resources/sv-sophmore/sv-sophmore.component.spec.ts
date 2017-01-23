/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvSophmoreComponent } from './sv-sophmore.component';

describe('SvSophmoreComponent', () => {
  let component: SvSophmoreComponent;
  let fixture: ComponentFixture<SvSophmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvSophmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvSophmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
