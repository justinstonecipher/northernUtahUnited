/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CacheValleyCupComponent } from './cache-valley-cup.component';

describe('CacheValleyCupComponent', () => {
  let component: CacheValleyCupComponent;
  let fixture: ComponentFixture<CacheValleyCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacheValleyCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheValleyCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
