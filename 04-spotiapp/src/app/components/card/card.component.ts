import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { Album } from '../../shared/interfaces/spoti-tracks';
import { ArtistItem } from '../../shared/interfaces/spoti-artists';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NoimagePipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() items: Array<ArtistItem | Album> = [];

  constructor(private router: Router) {}

  getAlbum(item: ArtistItem | Album): Album {
    return item as Album;
  }

  getArtist(item: ArtistItem | Album): ArtistItem {
    return item as ArtistItem;
  }

  goToArtist(item: Album | ArtistItem): void {
    const artistId =
      this.isArtist(item) ? item.id : (<Album>item).artists[0].id;
    this.router.navigate(['/artist', artistId]);
  }

  isArtist(item: Album | ArtistItem): boolean {
    return item.type === 'artist';
  }
}
