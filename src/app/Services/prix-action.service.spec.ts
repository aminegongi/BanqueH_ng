import { TestBed } from '@angular/core/testing';

import { PrixActionService } from './prix-action.service';

describe('PrixActionService', () => {
  let service: PrixActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrixActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
