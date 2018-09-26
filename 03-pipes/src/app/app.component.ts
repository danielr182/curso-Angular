import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Daniel';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Batman',
    clave: 'The Batman',
    edad: 45,
    habilidades: {
      fisicas: 'bajo',
      mentales: 'medio'
    }
  };
  urlVideo = 'https://www.youtube.com/embed/wJnBTPUQS5A?rel=0&amp;start=4';
  activar = true;
}
