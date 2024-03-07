import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  searchHero(text: string) {
    this._route.navigate(['/search', text]);
  }

}
