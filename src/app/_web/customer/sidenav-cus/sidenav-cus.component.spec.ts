import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCusComponent } from './sidenav-cus.component';

describe('SidenavCusComponent', () => {
  let component: SidenavCusComponent;
  let fixture: ComponentFixture<SidenavCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
