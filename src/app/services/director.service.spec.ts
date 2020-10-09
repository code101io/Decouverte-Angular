import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DirectorService } from './director.service';

describe('DirectorService', () => {
  let service: DirectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DirectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
