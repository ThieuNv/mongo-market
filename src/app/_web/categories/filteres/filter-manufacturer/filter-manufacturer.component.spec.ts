import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterManufacturerComponent } from './filter-manufacturer.component';

describe('FilterManufacturerComponent', () => {
  let component: FilterManufacturerComponent;
  let fixture: ComponentFixture<FilterManufacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterManufacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
