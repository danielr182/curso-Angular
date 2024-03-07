import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { HeroCardComponent } from '../hero-card/hero-card.component';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroCardComponent],
  providers: [HeroesService],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  constructor( private _heroesService: HeroesService, private _route: Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  heroDetail (index: number) {
    this._route.navigate(['/heroe', index]);
  }

}
