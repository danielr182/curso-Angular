import { MapaEditarComponent } from './mapa-editar.component';
import { Marcador } from './../../classes/marcador.class';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  lat = 4.750487;
  lng = -74.091252;

  constructor( public snackBar: MatSnackBar, public dialog: MatDialog ) {

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

  }

  ngOnInit() {
  }

  agregarMarcador( event ) {
    const nuevoMarcador = new Marcador(event.coords.lat, event.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', {
      duration: 3000
    });
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador( idx: number) {
    this.marcadores.splice(idx, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', {
      duration: 3000
    });
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      console.log(result);
      marcador.titulo = result.titulo;
      marcador.descripcion = result.descripcion;
      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', {
        duration: 3000
      });
    });
  }

}
