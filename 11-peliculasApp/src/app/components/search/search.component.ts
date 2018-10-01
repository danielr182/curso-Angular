import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  buscar = '';

  constructor(private _ps: PeliculasService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params['texto']) {
        this.buscar = params['texto'];
        this.buscarPelicula();
      } else if (this._ps.busqueda.length > 0) {
        this.buscar = this._ps.busqueda;
      }
    });
   }

  ngOnInit() {
  }

  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }
    this._ps.busqueda = this.buscar;
    this._ps.getPelicula(this.buscar).subscribe();
  }

}
