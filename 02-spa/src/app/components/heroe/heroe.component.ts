
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};
  constructor( private activatedRoute: ActivatedRoute, private _heroeService: HeroesService, private _router: Router) {
    this.activatedRoute.params.subscribe(
      params => {
        this.heroe = this._heroeService.getHeroe(params['id']);
      }
    );
  }

  regresarHeroes() {
    this._router.navigate(['/heroes']);
  }


}
