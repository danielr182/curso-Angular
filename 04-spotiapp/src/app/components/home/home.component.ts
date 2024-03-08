import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoadingComponent, CardComponent],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  loading: boolean = false;
  counter: number | undefined;

  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {
    this.getNewReleases();
  }

  getNewReleases() {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
      this.loading = false;
    });
  }
}
