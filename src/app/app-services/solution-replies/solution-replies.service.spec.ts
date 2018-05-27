import { TestBed, inject } from '@angular/core/testing';

import { SolutionRepliesService } from './solution-replies.service';

describe('SolutionRepliesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolutionRepliesService]
    });
  });

  it('should be created', inject([SolutionRepliesService], (service: SolutionRepliesService) => {
    expect(service).toBeTruthy();
  }));
});
