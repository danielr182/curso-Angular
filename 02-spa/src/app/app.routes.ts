import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: 'search/:text', component: SearcherComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
