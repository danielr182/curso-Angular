import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number | undefined;
  @Output() selectedHero: EventEmitter<number>;
  constructor(private _route: Router) { 
    this.selectedHero = new EventEmitter();
  }
  ngOnInit() {
  }

  heroDetail () {
    this._route.navigate(['/hero', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
