/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CacheValleyMiniCupComponent } from './cache-valley-mini-cup.component';

describe('CacheValleyMiniCupComponent', () => {
  let component: CacheValleyMiniCupComponent;
  let fixture: ComponentFixture<CacheValleyMiniCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacheValleyMiniCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheValleyMiniCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
