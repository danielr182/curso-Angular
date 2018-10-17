import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string;
  constructor(private http: HttpClient) {
    console.log('Servicio spotify listo.');
   }

   getQuery (query: string) {
     const url = `https://api.spotify.com/v1/${ query }`;
     const headers = new HttpHeaders ({
        'Authorization': `Bearer ${ this.token }`
      });
      return this.http.get(url, { headers });
   }

   getTokenSpotify () {
     const client_id = 'aa5615faaf8749edb25d73837c4888a8';
     const client_secret = 'dfecab14e4964ea99a1edddbc377d192';
     const urlServer = `https://spotify-get-token.herokuapp.com/spotify/${ client_id }/${ client_secret }`;
     return this.http.get(urlServer);
   }

   getNewReleases () {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map ( data => data['albums'].items ));
   }

   getArtistas (termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=10`)
              .pipe( map ( data => data['artists'].items ));
   }

   getArtistaPorId (id: string) {

    return this.getQuery(`artists/${ id }`);
   }

   getArtistTopTracks (id: string) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe( map ( data => data['tracks'] ));
   }
}
