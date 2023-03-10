import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptLibComponent } from './prompt-lib.component';

describe('PromptLibraryComponent', () => {
  let component: PromptLibComponent;
  let fixture: ComponentFixture<PromptLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
