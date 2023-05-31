import { Component, ElementRef, ViewChild } from '@angular/core';
import { Hero } from 'src/app/hero.interface';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
    heroes: Hero[] = [];

    @ViewChild('inputAddHero') inputAddHero!: ElementRef;

    constructor(private heroService: HeroService) {
        heroService.getHeroes().subscribe((data) => {
            this.heroes = data;
        });
    }

    addHero(name: string){
        name = name.trim();
        if (!name) return;
        this.heroService.addHero({name} as Hero).subscribe(hero => {
            this.heroes.push(hero);
            this.inputAddHero.nativeElement.value = '';
        });
    }

    deleteHero(hero: Hero) {
        this.heroes = this.heroes.filter(heroItem => heroItem !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }
}
