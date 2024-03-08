import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';
import { Buffer } from 'buffer';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string = '';
  constructor(private http: HttpClient) {
    console.log('Servicio spotify listo.');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    return this.getTokenSpotify().pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        });
        return this.http.get(url, { headers });
      })
    );
  }

  getTokenSpotify() {
    if (this.token) {
      return of({});
    }

    const client_id = 'aa5615faaf8749edb25d73837c4888a8';
    const client_secret = 'dfecab14e4964ea99a1edddbc377d192';
    const urlServer = 'https://accounts.spotify.com/api/token';
    const authorization = `${client_id}:${client_secret}`;
    const headers = {
      Authorization: `Basic ${Buffer.from(authorization).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    return this.http
      .post(urlServer, body, { headers })
      .pipe(tap((data: any) => (this.token = data.access_token)));
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(
      map((data: any) => data['artists'].items)
    );
  }

  getArtistById(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getArtistTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => data['tracks'])
    );
  }
}
