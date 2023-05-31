import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './hero.interface';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroUrl = 'api/heroes'
    constructor(private http: HttpClient) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroUrl).pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError(() => error);
          })
        );
    }

    getHeroById(id: number): Observable<Hero> {
        return this.http.get<Hero>(this.heroUrl + `/${id}`).pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError(() => error);
          })
        );
    }

    updateHero(hero: Hero): Observable<Hero> {
        // localStorage.removeItem(`${hero.id}`);
        // localStorage.setItem(`${hero.id}`, hero.name);
        return this.http.put<Hero>(this.heroUrl + `/${hero.id}`, hero).pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError(() => error);
          })
        );
    }

    addHero(hero: Hero): Observable<Hero> {
        // localStorage.setItem(`${hero.id}`, hero.name);
        return this.http.post<Hero>(this.heroUrl, hero).pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError(() => error);
          })
        );
    }

    deleteHero(hero: Hero): Observable<Hero> {
        // localStorage.removeItem(`${hero.id}`);
        return this.http.delete<Hero>(this.heroUrl + `/${hero.id}`).pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError(() => error);
          })
        );
    }
}
