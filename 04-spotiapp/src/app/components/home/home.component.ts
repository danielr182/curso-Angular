import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CardComponent } from '../card/card.component';
import { Album } from '../../shared/interfaces/spoti-tracks';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoadingComponent, CardComponent],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  newSongs: Album[] = [];
  loading: boolean = false;
  counter: number | undefined;

  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {
    this.getNewReleases();
  }

  getNewReleases(): void {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data) => {
      this.newSongs = data;
      this.loading = false;
    });
  }
}
