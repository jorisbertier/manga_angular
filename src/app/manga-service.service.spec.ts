import { TestBed } from '@angular/core/testing';

import { MangaService } from './manga-service.service';

describe('MangaServiceService', () => {
  let service: MangaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
