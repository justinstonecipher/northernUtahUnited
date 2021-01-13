import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AcademySoccerComponent } from './academy-soccer.component';

describe('AcademySoccerComponent', () => {
  let component: AcademySoccerComponent;
  let fixture: ComponentFixture<AcademySoccerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademySoccerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademySoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
