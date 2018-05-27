import { TestBed, inject } from '@angular/core/testing';

import { SolutionLikesService } from './solution-likes.service';

describe('SolutionLikesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolutionLikesService]
    });
  });

  it('should be created', inject([SolutionLikesService], (service: SolutionLikesService) => {
    expect(service).toBeTruthy();
  }));
});
