import { Component } from '@angular/core'
import { Producto } from '../models/producto'
import { ProductoService} from '../services/producto.service';

@Component({
	selector: 'productos-list',
	templateUrl: '../views/productos-list.html',
	providers: [ProductoService]
})
export class ProductosListComponent{
	public titulo:string;
	public productos:Producto[];

	constructor(
		private _productoService: ProductoService
	){
		this.titulo = 'Listado de productos';
	}

	ngOnInit(){
		console.log('Componente listado de productos cargado');
/*
		this._productoService.getArticulos().subscribe(
			result => {
				this.productos = result;
				if(!this.productos){
					console.log("Error en el servidor");
				}
			},
			error => {
				console.log(error)
			}
		)
*/
		this.productos = this._productoService.getArticulos();
	}
}