import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxRelativeComponent } from './box-relative.component';

describe('BoxRelativeComponent', () => {
  let component: BoxRelativeComponent;
  let fixture: ComponentFixture<BoxRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
