import { TestBed } from '@angular/core/testing';

import { RequestGamesService } from './request-games.service';

describe('RequestGamesService', () => {
  let service: RequestGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
