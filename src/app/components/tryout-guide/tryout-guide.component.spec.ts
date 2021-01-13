import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TryoutGuideComponent } from './tryout-guide.component';

describe('TryoutGuideComponent', () => {
  let component: TryoutGuideComponent;
  let fixture: ComponentFixture<TryoutGuideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TryoutGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryoutGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
