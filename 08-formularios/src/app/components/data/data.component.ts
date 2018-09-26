import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('Daniel'),
      'apellido': new FormControl(),
      'correo': new FormControl(),
    });
  }

  guardarCambios() {
    console.log(this.forma);
  }

}
