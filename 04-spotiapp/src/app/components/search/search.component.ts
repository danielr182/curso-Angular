import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  nuevasCanciones: any[];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  buscarArtista (termino: string) {
    this.nuevasCanciones = [];
    if (termino !== '') {
      this.loading = true;
      this.spotify.getArtistas(termino)
      .subscribe( (data) => {
          this.loading = false;
          this.nuevasCanciones = data;
        });
    }

  }

}
