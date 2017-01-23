/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsuSoccerComponent } from './usu-soccer.component';

describe('UsuSoccerComponent', () => {
  let component: UsuSoccerComponent;
  let fixture: ComponentFixture<UsuSoccerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuSoccerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuSoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
