import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  counter: number;
  constructor( private spotify: SpotifyService) {
    if (this.spotify.token === undefined) {
        this.loading = true;
        this.spotify.getTokenSpotify().subscribe((data: any) => {
        this.spotify.token = data.access_token;
        this.getNewReleases();
      });
    } else {
      this.getNewReleases();
    }
  }

  getNewReleases() {
    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
    });
  }

}
