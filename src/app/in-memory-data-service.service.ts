import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero.interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {

    createDb() {
        let heroes: Hero[] = [
            { id: 12, name: 'Dr. Nice' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr. IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        // for (let hero of heroes) {
        //     localStorage.setItem(`${hero.id}`, hero.name);
        // }
        return {heroes};
    }

    genId(heroes: Hero[]): number | null {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id as number)) + 1 : 11;
    }
}
