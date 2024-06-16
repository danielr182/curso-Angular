import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CardComponent } from '../card/card.component';
import { ArtistItem } from '../../shared/interfaces/spoti-artists';
import { Utils } from '../../shared/utils/utils';
import { Subject, Subscription, of } from 'rxjs';
import { autocomplete } from '../../shared/utils/autocomplete';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [LoadingComponent, CardComponent],
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit, OnDestroy {
  @HostListener('window:scroll', ['$event']) onScroll() {
    if (Utils.isReachingBottonPage()) {
      this.getArtists(this.term);
    }
  }

  newSongs: ArtistItem[] = [];
  loading: boolean = false;
  page: number = 0;
  term: string = '';
  term$ = new Subject<string>();
  private subscriptions: Subscription = new Subscription();

  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.term$
        .pipe(autocomplete(300, (term: string) => of(this.searchArtist(term))))
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  searchArtist(term: string): void {
    this.newSongs = [];
    this.page = 0;
    if (term !== '') {
      this.term = term;
      this.getArtists(term);
    }
  }

  getArtists(term: string): void {
    if (this.loading) return;

    this.loading = true;
    this.spotify.getArtists(term, this.page).subscribe((data) => {
      this.page++;
      this.newSongs.push(...data);
      this.loading = false;
    });
  }
}
