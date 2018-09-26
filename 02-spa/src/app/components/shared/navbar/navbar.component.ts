import { HeroesService } from '../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService, private _route: Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    this._route.navigate(['/buscar', termino]);
  }

}
