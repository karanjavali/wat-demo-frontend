import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceLibComponent } from './resource-lib.component';

describe('ResourceLibComponent', () => {
  let component: ResourceLibComponent;
  let fixture: ComponentFixture<ResourceLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
