import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptLibraryComponent } from './prompt-lib.component';

describe('PromptLibraryComponent', () => {
  let component: PromptLibraryComponent;
  let fixture: ComponentFixture<PromptLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
