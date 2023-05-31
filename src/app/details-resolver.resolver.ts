import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeroService } from './hero.service';
import { Hero } from './hero.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailsResolverResolver implements Resolve<Hero> {
    constructor(private heroService: HeroService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> {
    return this.heroService.getHeroById(+route.params['id']);
  }
}
