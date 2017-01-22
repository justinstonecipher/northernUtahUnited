/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KentonComponent } from './kenton.component';

describe('KentonComponent', () => {
  let component: KentonComponent;
  let fixture: ComponentFixture<KentonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KentonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KentonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
