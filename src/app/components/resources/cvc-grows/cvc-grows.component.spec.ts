/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CvcGrowsComponent } from './cvc-grows.component';

describe('CvcGrowsComponent', () => {
  let component: CvcGrowsComponent;
  let fixture: ComponentFixture<CvcGrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvcGrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvcGrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
