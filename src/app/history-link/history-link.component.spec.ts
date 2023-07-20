import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryLinkComponent } from './history-link.component';

describe('HistoryLinkComponent', () => {
  let component: HistoryLinkComponent;
  let fixture: ComponentFixture<HistoryLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryLinkComponent]
    });
    fixture = TestBed.createComponent(HistoryLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
