import { TestBed, inject } from '@angular/core/testing';

import { ChangeUxService } from './change-ux.service';

describe('ChangeUxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeUxService]
    });
  });

  it('should be created', inject([ChangeUxService], (service: ChangeUxService) => {
    expect(service).toBeTruthy();
  }));
});
