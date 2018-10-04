import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCusComponent } from './order-cus.component';

describe('OrderCusComponent', () => {
  let component: OrderCusComponent;
  let fixture: ComponentFixture<OrderCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
