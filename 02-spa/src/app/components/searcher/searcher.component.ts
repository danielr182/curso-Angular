import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { HeroCardComponent } from '../hero-card/hero-card.component';

@Component({
  selector: 'app-searcher',
  standalone: true,
  imports: [HeroCardComponent],
  providers: [HeroesService],
  templateUrl: './searcher.component.html',
})
export class SearcherComponent implements OnInit {
  heroes: any = [];
  textToSearch: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.textToSearch = params['text'];
      this.heroes = this._heroesService.searchHero(params['text']);
    });
  }
}
