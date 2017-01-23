/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RslSoundersComponent } from './rsl-sounders.component';

describe('RslSoundersComponent', () => {
  let component: RslSoundersComponent;
  let fixture: ComponentFixture<RslSoundersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RslSoundersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RslSoundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
