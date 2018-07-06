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
			let res = [{"id":1,"nombre":"Helado","descripcion":"Helado de fresa","precio":5000,"imagen":"https://recetas.cosasdepeques.com/wp-content/uploads/sites/2/2012/06/como-hacer-helados-479x527.jpg"},
			   {"id":2,"nombre":"Tarrina","descripcion":"Tarrina de helado","precio":5,"imagen":"https://gastronomiaycia.republica.com/wp-content/photos/helado_facil_nata_choco1.jpg"},
			   {"id":3,"nombre":"Copa","descripcion":"Copa de helado","precio":4,"imagen":"https://mobile-cdn.123rf.com/300wm/imagestore/imagestore1411/imagestore141100039/33704211-helado-en-taza-de-helado-en-el-fondo-blanco.jpg?ver=6"},
			   {"id":4,"nombre":"Helado 2","descripcion":"Helado de chocolate","precio":2,"imagen":"http://haycosasmuynuestras.com/wp-content/uploads/2015/03/Helado-de-miel-y-romero_opt.jpg"},
			   {"id":6,"nombre":"Copa 2","descripcion":"Copa de helado","precio":4,"imagen":"http://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2012/08/helado_final.jpg"},
			   {"id":17,"nombre":"aSDFG","descripcion":"WETERY","precio":789,"imagen":"https://i.pinimg.com/originals/a4/08/54/a408547296fead57417de9da1a191904.png"},
			   {"id":18,"nombre":"Helado Asen","descripcion":"Asen Helado","precio":5000,"imagen":"https://i.pinimg.com/originals/a4/08/54/a408547296fead57417de9da1a191904.png"}]

/*
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
*/
			this.producto = res[id-1];
		})
	}
}