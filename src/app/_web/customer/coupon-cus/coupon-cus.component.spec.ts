import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponCusComponent } from './coupon-cus.component';

describe('CouponCusComponent', () => {
  let component: CouponCusComponent;
  let fixture: ComponentFixture<CouponCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
