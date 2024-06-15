import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { DomseguroPipe } from '../../pipes/domseguro.pipe';
import { environment } from '../../../environments/environment';
import { Track } from '../../shared/interfaces/spoti-tracks';
import { ArtistItem } from '../../shared/interfaces/spoti-artists';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [RouterModule, LoadingComponent, NoimagePipe, DomseguroPipe],
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent {
  artist: ArtistItem = {} as ArtistItem;
  topTracks: Track[] = [];
  loading: boolean = false;
  previewTrackUrl = environment.spoti_preview_track_url;

  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.getData(params['id']);
    });
  }

  private getData(id: string): void {
    this.loading = true;
    forkJoin({
      artist: this.spotifyService.getArtistById(id),
      topTracks: this.spotifyService.getArtistTopTracks(id),
    }).subscribe({
      next: ({ artist, topTracks }) => {
        this.artist = artist;
        this.topTracks = topTracks;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.log(err);
      },
    });
  }
}
