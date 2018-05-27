import { TestBed, inject } from '@angular/core/testing';

import { ProblemTypesService } from './problem-types.service';

describe('ProblemTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemTypesService]
    });
  });

  it('should be created', inject([ProblemTypesService], (service: ProblemTypesService) => {
    expect(service).toBeTruthy();
  }));
});
