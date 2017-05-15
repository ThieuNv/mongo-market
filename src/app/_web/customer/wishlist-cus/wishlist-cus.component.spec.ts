import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCusComponent } from './wishlist-cus.component';

describe('WishlistCusComponent', () => {
  let component: WishlistCusComponent;
  let fixture: ComponentFixture<WishlistCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
