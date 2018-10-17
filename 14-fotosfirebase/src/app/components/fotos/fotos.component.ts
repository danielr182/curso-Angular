import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {
  nombre: string;
  url: string;
}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {

  private imagenes: Item[] = [];

  constructor( private afs: AngularFirestore) {
    this.consultarArchivos().subscribe();
  }

  ngOnInit() {
  }

  consultarArchivos() {
    return this.afs.collection<Item>('img').valueChanges()
                            .pipe( map( (archivos: Item[]) => {
                              this.imagenes = archivos;
                            }));
  }

}
