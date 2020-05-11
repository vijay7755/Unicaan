import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsSectionComponent } from './feeds-section.component';

describe('FeedsSectionComponent', () => {
  let component: FeedsSectionComponent;
  let fixture: ComponentFixture<FeedsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
