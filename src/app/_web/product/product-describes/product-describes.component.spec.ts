import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescribesComponent } from './product-describes.component';

describe('ProductDescribesComponent', () => {
  let component: ProductDescribesComponent;
  let fixture: ComponentFixture<ProductDescribesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDescribesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescribesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
