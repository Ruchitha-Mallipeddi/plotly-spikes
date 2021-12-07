import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerNoteComponent } from './marker-note.component';

describe('MarkerNoteComponent', () => {
  let component: MarkerNoteComponent;
  let fixture: ComponentFixture<MarkerNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkerNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
