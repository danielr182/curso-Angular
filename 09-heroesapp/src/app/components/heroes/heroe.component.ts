import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  };

  id: string;

  constructor(private _heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== 'nuevo') {
        this._heroesService.consultarHeroe(this.id)
          .subscribe(data => {
            this.heroe = data;
          },
          error => console.log(error));
      }
    });
  }

  ngOnInit() {
  }

  guardar() {

    if (this.id === 'nuevo') {
      // creando
      this._heroesService.nuevoHeroe(this.heroe)
          .subscribe(data => {
            this.router.navigate(['/heroe', data.name]);
          },
          error => console.log(error));
    } else {
      // actualizando
      this._heroesService.actualizarHeroe(this.heroe, this.id)
          .subscribe(data => {
            console.log('actualizar data: ', data);
          },
          error => console.log(error));
    }
  }

  agregarNuevoHeroe(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'Marvel'
    });
  }

}
