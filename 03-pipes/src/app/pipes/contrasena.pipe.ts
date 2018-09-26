import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {

    const tamañoString: number = value.length;
    let contrasena = '*';
    if (activar) {
      contrasena = contrasena.repeat(tamañoString);
    } else {
      contrasena = value;
    }

    return contrasena;
  }

}
