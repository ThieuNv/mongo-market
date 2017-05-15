import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCusComponent } from './manage-cus.component';

describe('ManageCusComponent', () => {
  let component: ManageCusComponent;
  let fixture: ComponentFixture<ManageCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
