import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  providers: [HeroesService],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  hero: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService,
    private _router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.hero = this._heroeService.getHero(params['id']);
    });
  }

  regresarHeroes() {
    this._router.navigate(['/heroes']);
  }
}
