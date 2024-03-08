import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NoimagePipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() items: any[] = [];
  constructor(private router: Router) {}

  goToArtist(item: any) {
    const artistId = (item.type === 'artist') ? item.id : item.artists[0].id;
    this.router.navigate(['/artist', artistId]);
  }

}
