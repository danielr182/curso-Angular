import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any;
  loading = false;

  constructor(private _heroesService: HeroesService) {
    this.consultarHeroes();
  }

  ngOnInit() {
  }

  consultarHeroes() {
    this.loading = true;
    this._heroesService.consultarHeroes()
    .subscribe( data => {
      this.heroes = data;
      this.loading = false;
      });
  }

  borrarHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$)
        .subscribe( data => {
          if (data) {
            // error
            console.error(data);
          } else {
            // todo bien
            delete this.heroes[key$];
          }
        });
  }

}
