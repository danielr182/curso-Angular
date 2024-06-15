import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Buffer } from 'buffer';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { SpotiNewReleases } from '../shared/interfaces/spoti-new-releases';
import { SpotiToken } from '../shared/interfaces/spoti-token';
import { ArtistItem, SpotiArtists } from '../shared/interfaces/spoti-artists';
import { Album, SpotiTracks, Track } from '../shared/interfaces/spoti-tracks';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string = '';
  constructor(private http: HttpClient) {}

  getQuery<T>(query: string): Observable<T> {
    const url = `${environment.spoti_api_url}/${query}`;
    return this.getTokenSpotify().pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        });
        return this.http.get<T>(url, { headers });
      })
    );
  }

  getTokenSpotify(): Observable<void> {
    if (this.token) {
      return of(undefined);
    }

    const authorization = `${environment.spoti_client_id}:${environment.spoti_client_secret}`;
    const headers = {
      Authorization: `Basic ${Buffer.from(authorization).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    return this.http
      .post<SpotiToken>(environment.spoti_token_url, body, { headers })
      .pipe(
        map((data: SpotiToken) => {
          this.token = data.access_token;
          return;
        })
      );
  }

  getNewReleases(): Observable<Album[]> {
    return this.getQuery<SpotiNewReleases>('browse/new-releases?limit=20').pipe(
      map((data) => data.albums.items)
    );
  }

  getArtists(term: string): Observable<ArtistItem[]> {
    return this.getQuery<SpotiArtists>(
      `search?q=${term}&type=artist&limit=10`
    ).pipe(map((data) => data.artists.items));
  }

  getArtistById(id: string): Observable<ArtistItem> {
    return this.getQuery<ArtistItem>(`artists/${id}`);
  }

  getArtistTopTracks(id: string): Observable<Track[]> {
    return this.getQuery<SpotiTracks>(
      `artists/${id}/top-tracks?country=us`
    ).pipe(map((data) => data.tracks));
  }
}
