import { Component } from "@angular/core";
import { Lista } from "../../models/lista.model";
import { DeseosService } from "../../services/deseos.service";

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosPage {

    constructor(public deseosService: DeseosService) {

    }

    listaSeleccionada(lista: Lista) {

    }

}