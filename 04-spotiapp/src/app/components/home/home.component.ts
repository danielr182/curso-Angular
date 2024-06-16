import { Component, HostListener, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CardComponent } from '../card/card.component';
import { Album } from '../../shared/interfaces/spoti-tracks';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoadingComponent, CardComponent],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onScroll() {
    if(Utils.isReachingBottonPage()) {
      this.getNewReleases();
    }
  }

  newSongs: Album[] = [];
  loading: boolean = false;
  page: number = 0;

  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {
    this.getNewReleases();
  }

  getNewReleases(): void {
    if (this.loading) return;

    this.loading = true;
    this.spotify.getNewReleases(this.page).subscribe((data) => {
      this.page++;
      this.newSongs.push(...data);
      this.loading = false;
    });
  }
}
