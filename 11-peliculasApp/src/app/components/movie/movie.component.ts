import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  pelicula: any;
  regresarA = '';

  constructor(private _ps: PeliculasService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
        this.regresarA = params['pagina'];
        this._ps.getDetallePelicula(params['id']).subscribe( data => {
          console.log('regresarA: ', this.regresarA);
          this.pelicula = data;
        });
    });
   }

  ngOnInit() {
  }

}
