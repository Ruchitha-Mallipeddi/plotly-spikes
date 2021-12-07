import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePlotComponent } from './base-plot.component';

describe('BasePlotComponent', () => {
  let component: BasePlotComponent;
  let fixture: ComponentFixture<BasePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
