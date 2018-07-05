import {Component} from '@angular/core';
import {ProductoService} from '../services/producto.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Producto} from '../models/producto'

@Component({
	selector: 'producto-detalle',
	templateUrl: '../views/producto-detalle.html',
	providers: [ProductoService]
})
export class ProductoDetalleComponent{
	public titulo:string;
	public producto:Producto;

	constructor(
		private _productoService: ProductoService,
		private _route: ActivatedRoute
	){
		this.titulo="Detalle del producto";
	}

	ngOnInit(){
		console.log(" Componente detalle del producto cargado");
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._productoService.getArticulo(id).subscribe(
				response => {
//					if(response.code == 200){
						this.producto = response;
//					}else {
//						this._router.navigate(['/productos']);
//					}
				},
				error => {
					console.log(<any>error);
				}
			);
		})
	}
}