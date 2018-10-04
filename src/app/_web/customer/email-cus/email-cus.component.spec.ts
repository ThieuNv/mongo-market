import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCusComponent } from './email-cus.component';

describe('EmailCusComponent', () => {
  let component: EmailCusComponent;
  let fixture: ComponentFixture<EmailCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
