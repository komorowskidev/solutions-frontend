import { TestBed } from '@angular/core/testing';

import { SolutionClientService } from './solution-client.service';

describe('SolutionClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolutionClientService = TestBed.get(SolutionClientService);
    expect(service).toBeTruthy();
  });
});
