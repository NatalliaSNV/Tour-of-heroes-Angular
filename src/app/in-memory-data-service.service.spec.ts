import { TestBed } from '@angular/core/testing';

import { InMemoryDataServiceService } from './in-memory-data-service.service';

fdescribe('InMemoryDataServiceService', () => {
  let service: InMemoryDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method genId with right return values', () => {
    let heroes = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
    ];
    expect(service.genId(heroes)).toBe(4);
    heroes = [];
    expect(service.genId(heroes)).toBe(11);
  });
});
