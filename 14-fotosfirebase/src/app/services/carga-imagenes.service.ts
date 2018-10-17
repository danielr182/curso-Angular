import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileItem } from './../models/file-item';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';
  public subiendoArchivos = false;

  constructor( private db: AngularFirestore, private storage: AngularFireStorage) {}

  private guardarImagen( imagen: { nombre: string, url: string } ) {

    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
        .add(imagen);

  }

  cargarImagenesFirebase( imagenes: FileItem[]) {

    this.subiendoArchivos = true;
    let totalArchivos = imagenes.length;
    let numeroArchivosCargados = 0;
    for (const imagen of imagenes) {
      imagen.estaSubiendo = true;
      if ( imagen.progreso >= 100) {
        totalArchivos--;
        continue;
      }

      const filePath = `/${ this.CARPETA_IMAGENES }/${ imagen.nombreArchivo }`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, imagen.archivo);

      // observe percentage changes
    task.percentageChanges().subscribe((porcentaje: any) => {
      imagen.progreso = porcentaje;
    });
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => fileRef.getDownloadURL().subscribe( (url: any) => {
          imagen.url = url;
          imagen.estaSubiendo = false;
          this.guardarImagen({
            nombre: imagen.nombreArchivo,
            url: imagen.url
          });
          numeroArchivosCargados++;
          if ( numeroArchivosCargados === totalArchivos) {
              this.subiendoArchivos = false;
          }
        }) )
     )
    .subscribe(data => {}, error => console.error('Error al cargar ', error));

    }
    if (totalArchivos === 0) {
      this.subiendoArchivos = false;
    }
  }
}
