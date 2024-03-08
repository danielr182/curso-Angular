import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { DomseguroPipe } from '../../pipes/domseguro.pipe';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [RouterModule, LoadingComponent, NoimagePipe, DomseguroPipe],
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean = false;
  urlVistaPreviaTrack = 'https://open.spotify.com/embed/track/';

  constructor(private spotifyService: SpotifyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(
      params => {
        this.loading = true;
        this.getArtist(params['id']);
        this.getTopTracks(params['id']);
      }
    );
   }

   getArtist(id: string) {
    this.spotifyService.getArtistById(id).subscribe((data: any) => {
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
