import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecificantsComponent } from './product-specificants.component';

describe('ProductSpecificantsComponent', () => {
  let component: ProductSpecificantsComponent;
  let fixture: ComponentFixture<ProductSpecificantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSpecificantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpecificantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
