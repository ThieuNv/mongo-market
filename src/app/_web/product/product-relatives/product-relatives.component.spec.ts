import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRelativesComponent } from './product-relatives.component';

describe('ProductRelativesComponent', () => {
  let component: ProductRelativesComponent;
  let fixture: ComponentFixture<ProductRelativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRelativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRelativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
