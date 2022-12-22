import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricLibComponent } from './metric-lib.component';

describe('MetricLibComponent', () => {
  let component: MetricLibComponent;
  let fixture: ComponentFixture<MetricLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
