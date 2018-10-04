import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdHomeComponent } from './prod-home.component';

describe('ProdHomeComponent', () => {
  let component: ProdHomeComponent;
  let fixture: ComponentFixture<ProdHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
