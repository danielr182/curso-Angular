import { Injectable } from "@angular/core";
import { Lista } from '../models';


@Injectable()
export class DeseosService {

    listas: Lista[] = [];

    constructor() {

        this.consultarStorage();
    
    }

    agragarLista( nuevaLista:Lista ) {
        this.listas.push( nuevaLista );
        this.guardarStorage();
    }

    eliminarLista( lista: Lista ) {
        this.listas = this.listas.filter( listaData => {
            return listaData.id !== lista.id;
        });
        this.guardarStorage();
    }

    guardarStorage() {
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    consultarStorage() {
        if( localStorage.getItem('data') ) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        }

    }

}