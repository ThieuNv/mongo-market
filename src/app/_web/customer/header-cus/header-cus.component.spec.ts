import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCusComponent } from './header-cus.component';

describe('HeaderCusComponent', () => {
  let component: HeaderCusComponent;
  let fixture: ComponentFixture<HeaderCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
