import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorTextDetailsComponent } from './mentor-text-details.component';

describe('MentorTextDetailsComponent', () => {
  let component: MentorTextDetailsComponent;
  let fixture: ComponentFixture<MentorTextDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorTextDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorTextDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
