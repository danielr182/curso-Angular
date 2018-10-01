import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:texto', component: SearchComponent },
    { path: 'movie/:id/:pagina', component: MovieComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
export const APP_ROUTES = RouterModule.forRoot(routes);
