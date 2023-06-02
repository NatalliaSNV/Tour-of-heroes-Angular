import { TestBed } from '@angular/core/testing';

import { DetailsResolverResolver } from './details-resolver.resolver';
import { HeroService } from './hero.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('DetailsResolverResolver', () => {
  let resolver: DetailsResolverResolver;
  let fakeState: RouterStateSnapshot;
  let fakeRoute: ActivatedRouteSnapshot;

  const fakeHeroService = jasmine.createSpyObj(['getHeroById']);
  const fakeActivatedRouteSnapshot = {
    params: {id: 1}
  };
  const fakeRouterStateSnapshot = {}

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            {provide: HeroService, useValue: fakeHeroService},
            {provide: ActivatedRouteSnapshot, useValue: fakeActivatedRouteSnapshot},
            {provide: RouterStateSnapshot, useValue: fakeRouterStateSnapshot},
        ]
    });
    resolver = TestBed.inject(DetailsResolverResolver);
    fakeState = TestBed.inject(RouterStateSnapshot);
    fakeRoute = TestBed.inject(ActivatedRouteSnapshot);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should call resolve and then heroService.getHeroById with certain parameter', () => {
    const spy = spyOn(resolver, 'resolve').and.callThrough();
    resolver.resolve(fakeRoute, fakeState);
    expect(spy).toHaveBeenCalled();
    expect(fakeHeroService.getHeroById).toHaveBeenCalledWith(1);
  })
});
