import { Component } from '@angular/core';
import { Hero } from 'src/app/hero.interface';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    heroes: Hero[] = [];
    heroesTop: Hero[] = [];
    heroesFiltered: Hero[] = [];

    constructor(private heroService: HeroService) {
        heroService.getHeroes().subscribe((data) => {
            this.heroesTop = data.slice(1,5);
            this.heroes = data;
        });
    }

    search(value: string){
        if (value.trim()) {
            this.heroesFiltered = this.heroes.filter((item) => {
                return item.name.toLowerCase().includes(value.trim().toLowerCase());
            }) 
        }
    }
}
