import { TestBed, inject } from '@angular/core/testing';

import { ProblemSolutionsService } from './problem-solutions.service';

describe('ProblemSolutionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemSolutionsService]
    });
  });

  it('should be created', inject([ProblemSolutionsService], (service: ProblemSolutionsService) => {
    expect(service).toBeTruthy();
  }));
});
