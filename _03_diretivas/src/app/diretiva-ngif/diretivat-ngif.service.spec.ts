import { TestBed } from '@angular/core/testing';

import { DiretivatNgifService } from './diretivat-ngif.service';

describe('DiretivatNgifService', () => {
  let service: DiretivatNgifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivatNgifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
