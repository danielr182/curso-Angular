import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

// Servicios
import { PeliculasService } from './services/peliculas.service';

// Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

// Router
import { APP_ROUTES } from './app.routes';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonpModule,
    FormsModule,
    RouterModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
