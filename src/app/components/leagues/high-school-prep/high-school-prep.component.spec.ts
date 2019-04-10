import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSchoolPrepComponent } from './high-school-prep.component';

describe('HighSchoolPrepComponent', () => {
  let component: HighSchoolPrepComponent;
  let fixture: ComponentFixture<HighSchoolPrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighSchoolPrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighSchoolPrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
