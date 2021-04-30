import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSchoolChallengerComponent } from './high-school-challenger.component';

describe('HighSchoolChallengerComponent', () => {
  let component: HighSchoolChallengerComponent;
  let fixture: ComponentFixture<HighSchoolChallengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighSchoolChallengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighSchoolChallengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
