import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.sort(function(hero1, hero2){
      	return hero2.score - hero1.score
      }).slice(0,4));
  }
}
