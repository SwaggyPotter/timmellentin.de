import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsUniverseComponent } from './cats-universe.component';

describe('CatsUniverseComponent', () => {
  let component: CatsUniverseComponent;
  let fixture: ComponentFixture<CatsUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsUniverseComponent]
    });
    fixture = TestBed.createComponent(CatsUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
