import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteresComponent } from './filteres.component';

describe('FilteresComponent', () => {
  let component: FilteresComponent;
  let fixture: ComponentFixture<FilteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
