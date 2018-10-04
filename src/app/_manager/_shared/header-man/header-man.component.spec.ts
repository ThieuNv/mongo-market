import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderManComponent } from './header-man.component';

describe('HeaderManComponent', () => {
  let component: HeaderManComponent;
  let fixture: ComponentFixture<HeaderManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
