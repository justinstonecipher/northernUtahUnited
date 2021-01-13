import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HighSchoolPrepComponent } from './high-school-prep.component';

describe('HighSchoolPrepComponent', () => {
  let component: HighSchoolPrepComponent;
  let fixture: ComponentFixture<HighSchoolPrepComponent>;

  beforeEach(waitForAsync(() => {
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
