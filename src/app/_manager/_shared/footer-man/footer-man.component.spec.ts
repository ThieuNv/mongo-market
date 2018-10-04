import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterManComponent } from './footer-man.component';

describe('FooterManComponent', () => {
  let component: FooterManComponent;
  let fixture: ComponentFixture<FooterManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
