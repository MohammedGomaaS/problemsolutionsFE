import { TestBed, inject } from '@angular/core/testing';

import { ProblemLikesService } from './problem-likes.service';

describe('ProblemLikesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemLikesService]
    });
  });

  it('should be created', inject([ProblemLikesService], (service: ProblemLikesService) => {
    expect(service).toBeTruthy();
  }));
});
