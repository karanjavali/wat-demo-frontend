import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorTextsComponent } from './mentor-texts.component';

describe('MentorTextsComponent', () => {
  let component: MentorTextsComponent;
  let fixture: ComponentFixture<MentorTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorTextsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
