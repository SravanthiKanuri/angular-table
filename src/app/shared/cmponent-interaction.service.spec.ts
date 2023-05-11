import { TestBed } from '@angular/core/testing';

import { CmponentInteractionService } from './cmponent-interaction.service';

describe('CmponentInteractionService', () => {
  let service: CmponentInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmponentInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
