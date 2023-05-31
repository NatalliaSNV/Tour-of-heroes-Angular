import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [HeroService, HttpClient, HttpHandler]
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
