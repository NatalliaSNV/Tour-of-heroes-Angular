import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hero } from 'src/app/hero.interface';
import { HeroService } from 'src/app/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
    hero: Hero = {
        id: null,
        name: ''
    };

    constructor(
        private route: ActivatedRoute, 
        private heroService: HeroService, 
        private location: Location
    )
    {}

    ngOnInit(): void {
        this.route.data.subscribe((data) => {
            this.hero = data['post'];        
            });
        // this.route.params.subscribe((params: Params) => {
        //     this.heroService.getHeroById(+params['id'])
        // });
    }

    goBack(){
        this.location.back();
    }

    save(){
        this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
}
