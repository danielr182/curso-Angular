import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[];
  loading: boolean;
  urlVistaPreviaTrack = 'https://open.spotify.com/embed/track/';

  constructor(private spotifyService: SpotifyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(
      params => {
        this.loading = true;
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
      }
    );
   }

   getArtista(id: string) {
    this.loading = true;
    this.spotifyService.getArtistaPorId(id).subscribe((data: any) => {
      this.artist = data;
      this.loading = false;
    });
   }

   getTopTracks(id: string) {
      this.spotifyService.getArtistTopTracks(id).subscribe((data: any) => {
        this.topTracks = data;
        console.log(data);
      });
   }

}
