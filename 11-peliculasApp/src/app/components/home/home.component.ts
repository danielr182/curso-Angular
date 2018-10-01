import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesKids: any;

  constructor(private _ps: PeliculasService) {
    this._ps.getCartelera().subscribe(data => {
        console.log(data);
        this.cartelera = data;
      }, err => console.error(err));
    this._ps.getPopulares().subscribe(data => {
        console.log(data);
        this.populares = data;
      }, err => console.error(err));
    this._ps.getPopularesKids().subscribe(data => {
        console.log(data);
        this.popularesKids = data;
      }, err => console.error(err));
    // this._ps.getPelicula('wall-e').subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
