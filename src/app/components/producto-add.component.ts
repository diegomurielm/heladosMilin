import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';

import {ProductoService} from '../services/producto.service';
import {Producto} from '../models/producto';
import {Respuesta} from '../models/respuesta';

@Component({
	selector: 'producto-add',
	templateUrl: '../views/producto-add.html',
	providers: [ProductoService]
})
export class ProductoAddComponent{
	public titulo: string;
	public producto:Producto;
	public progress: { percentage: number } = { percentage: 0 }
	public filesToUpload;
	public resultUpload;
	public currentFileUpload;
	public respuesta:Respuesta;

	constructor(
		private _productoService: ProductoService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.titulo = 'Crear un nuevo producto';
		this.producto = new Producto(0,'','',0,'');
	}

	ngOnInit(){
		console.log('Añadir un nuevo producto');
	}

	guardarProducto(){
		console.log(this.producto)
		this._productoService.addProducto(this.producto).subscribe(
			response => {
				if(response=200){
					console.log("Producto guardado con éxito");
					this._router.navigate(['/productos']);
				}else{
					console.log("Error al guardar el producto");
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
		console.log(this.filesToUpload);
	}

	onSubmit() {
	 	if(this.filesToUpload && this.filesToUpload.length >=1){

		    this.progress.percentage = 0;
		    this.currentFileUpload = this.filesToUpload.item(0)
		    this._productoService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
		    	if (event.type === HttpEventType.UploadProgress) {
			        this.progress.percentage = Math.round(100 * event.loaded / event.total);
			        console.log(this.progress.percentage);
			    }else if (event.type === HttpEventType.Response) {
			    	this.respuesta = JSON.parse(event.body.toString());
			    	if(this.respuesta.codigo=="200"){
				        console.log('File is completely uploaded!');
			    		this.producto.imagen=this.respuesta.mensaje;
			    	}else{
			    		console.log('Error: ' + this.respuesta.mensaje);
			    	}
		    		this.guardarProducto();
			    }else if (event.type === HttpEventType.ResponseHeader) {
			        console.log('Error al subir la imagen');
			    }
		    })
		 
		    this.filesToUpload = undefined;
		}else{
			this.guardarProducto();
		}
	}
}