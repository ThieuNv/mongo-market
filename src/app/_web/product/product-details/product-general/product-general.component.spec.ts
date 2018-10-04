import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGeneralComponent } from './product-general.component';

describe('ProductGeneralComponent', () => {
  let component: ProductGeneralComponent;
  let fixture: ComponentFixture<ProductGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
