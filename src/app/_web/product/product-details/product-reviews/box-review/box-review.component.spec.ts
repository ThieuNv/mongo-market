import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxReviewComponent } from './box-review.component';

describe('BoxReviewComponent', () => {
  let component: BoxReviewComponent;
  let fixture: ComponentFixture<BoxReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
