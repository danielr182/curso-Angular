import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl = 'https://heroesapp-de650.firebaseio.com/heroes.json';
  heroeUrl = 'https://heroesapp-de650.firebaseio.com/heroes/';

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesUrl, body, { headers })
            .pipe( map(respuesta => {
              console.log('crear: ', respuesta.json());
              return respuesta.json();
            }));
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${ this.heroeUrl }${ key$ }.json`;
    return this.http.put( url, body, { headers })
            .pipe( map(respuesta => {
              console.log('actualizar: ', respuesta.json());
              return respuesta.json();
            }));
  }

  consultarHeroe(key$: string){
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${ this.heroeUrl }${ key$ }.json`;
    return this.http.get( url, { headers })
            .pipe( map(respuesta => {
              return respuesta.json();
            }));

  }

  consultarHeroes() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.get( this.heroesUrl, { headers })
            .pipe( map(respuesta => {
              return respuesta.json();
            }));

  }

  borrarHeroe(key$: string) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${ this.heroeUrl }${ key$ }.json`;
    return this.http.delete( url, { headers })
            .pipe( map(respuesta => {
              return respuesta.json();
            }));
  }

}
