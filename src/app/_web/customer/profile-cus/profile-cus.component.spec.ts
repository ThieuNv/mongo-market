import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCusComponent } from './profile-cus.component';

describe('ProfileCusComponent', () => {
  let component: ProfileCusComponent;
  let fixture: ComponentFixture<ProfileCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
