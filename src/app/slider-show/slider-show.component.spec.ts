import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderShowComponent } from './slider-show.component';

describe('SliderShowComponent', () => {
  let component: SliderShowComponent;
  let fixture: ComponentFixture<SliderShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderShowComponent]
    });
    fixture = TestBed.createComponent(SliderShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
