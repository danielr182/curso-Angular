import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = 'e4e8df2204e9fa9d79bda2c55ed34b4c';
  private urlMovieDB = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];
  busqueda = '';

  constructor( private  jsonp: Jsonp) { }

  getPopulares() {

    const url = `${ this.urlMovieDB }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
            .pipe( map( res => {
              return res.json().results;
            }));
  }

  getPopularesKids() {

    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMovieDB }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
            .pipe( map( res => {
              return res.json().results;
            }));
  }

  getCartelera() {

    const fechaFin = new Date();
    const fechaInicio = new Date();
    fechaFin.setDate(fechaInicio.getDate() + 7);
    const fechaInicioString = (fechaInicio.getFullYear() + '-' + ('0' + (fechaInicio.getMonth() + 1)).slice(-2) + '-' +
                              ('0' + fechaInicio.getDate()).slice(-2));
    const fechaFinString = (fechaFin.getFullYear() + '-' + ('0' + (fechaFin.getMonth() + 1)).slice(-2) + '-' +
                              ('0' + fechaFin.getDate()).slice(-2));

    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMovieDB }/discover/movie?primary_release_date.gte=${ fechaInicioString }&primary_release_date.lte=${ fechaFinString }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
            .pipe( map( res => {
              return res.json().results;
            }));
  }

  getPelicula( texto: string) {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMovieDB }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
            .pipe( map( res => {
              this.peliculas = res.json().results;
              return res.json().results;
            }));
  }

  getDetallePelicula( id: string ) {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMovieDB }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
          .pipe( map( res => {
            return res.json();
          }));
  }
}
