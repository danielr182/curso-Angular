import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('directiva llamada');
  }

  // tslint:disable-next-line:no-input-rename
  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor);
  }

  @HostListener('mouseleave') mouseSale() {
    this.resaltar();
  }

  resaltar(color: string = null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
