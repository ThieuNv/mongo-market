import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdManComponent } from './prod-man.component';

describe('ProdManComponent', () => {
  let component: ProdManComponent;
  let fixture: ComponentFixture<ProdManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
