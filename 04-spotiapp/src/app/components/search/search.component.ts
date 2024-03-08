import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [LoadingComponent, CardComponent],
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  newSongs: any[] = [];
  loading: boolean = false;

  constructor(private spotify: SpotifyService) { }

  searchArtist (term: string) {
    this.newSongs = [];
    if (term !== '') {
      this.loading = true;
      this.spotify.getArtists(term)
      .subscribe( (data) => {
          this.loading = false;
          this.newSongs = data;
        });
    }

  }

}
