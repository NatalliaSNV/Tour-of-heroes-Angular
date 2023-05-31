import { TestBed } from '@angular/core/testing';

import { DetailsResolverResolver } from './details-resolver.resolver';
import { HeroService } from './hero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('DetailsResolverResolver', () => {
  let resolver: DetailsResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [DetailsResolverResolver, HeroService, HttpClient, HttpHandler]
    });
    resolver = TestBed.inject(DetailsResolverResolver);
    console.log('resolver', resolver);
    
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
