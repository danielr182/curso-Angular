import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { Lista, ListaItem } from "../../models";
import { DeseosService } from "../../services/deseos.service";

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage {

    nuevaLista: Lista;
    descNuevoItem: string = '';
    constructor(public deseosService: DeseosService, private navParams: NavParams) {
        const titulo = this.navParams.get('titulo');
        if (this.navParams.get('lista')) {
            this.nuevaLista = this.navParams.get('lista');
        } else {
            this.nuevaLista = new Lista( titulo );
            this.deseosService.agragarLista(this.nuevaLista);
        }
    }

    agregarNuevoItem() {
        if (this.descNuevoItem.length === 0) {
            return;
        }
        const nuevoItemLista = new ListaItem(this.descNuevoItem);
        this.nuevaLista.items.push(nuevoItemLista);
        this.deseosService.guardarStorage();
        this.descNuevoItem = '';
    }
    
    actualizarTarea(item: ListaItem) {
        item.completado = !item.completado;
        const pendientes = this.nuevaLista.items.filter(itemData => {
            return !itemData.completado;
        }).length;
        if (pendientes === 0) {
            this.nuevaLista.terminada = true;
            this.nuevaLista.terminadaEn = new Date();
        } else {
            this.nuevaLista.terminada = false;
            this.nuevaLista.terminadaEn = null;
        }
        this.deseosService.guardarStorage();
    }
    
    eliminarItem(index: number) {
        this.nuevaLista.items.splice(index, 1);
        this.deseosService.guardarStorage();
    }

}