import { TestBed, inject } from '@angular/core/testing';

import { CaffeineListService } from './caffeine-list.service';

describe('CaffeineListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaffeineListService]
    });
  });

  it('should ...', inject([CaffeineListService], (service: CaffeineListService) => {
    expect(service).toBeTruthy();
  }));
});
