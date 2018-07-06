import {Injectable} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Producto} from '../models/producto'

@Injectable()
export class ProductoService{
	public url:string;

	constructor(private _http:Http,
				private http: HttpClient){
		this.url='http://localhost:8080/';
	}

	getArticulos(){
//		return this._http.get(this.url+'productos').map(res => res.json());
		let res = [{"id":1,"nombre":"Helado","descripcion":"Helado de fresa","precio":5000,"imagen":"https://recetas.cosasdepeques.com/wp-content/uploads/sites/2/2012/06/como-hacer-helados-479x527.jpg"},
		   {"id":2,"nombre":"Tarrina","descripcion":"Tarrina de helado","precio":5,"imagen":"https://gastronomiaycia.republica.com/wp-content/photos/helado_facil_nata_choco1.jpg"},
		   {"id":3,"nombre":"Copa","descripcion":"Copa de helado","precio":4,"imagen":"https://mobile-cdn.123rf.com/300wm/imagestore/imagestore1411/imagestore141100039/33704211-helado-en-taza-de-helado-en-el-fondo-blanco.jpg?ver=6"},
		   {"id":4,"nombre":"Helado 2","descripcion":"Helado de chocolate","precio":2,"imagen":"http://haycosasmuynuestras.com/wp-content/uploads/2015/03/Helado-de-miel-y-romero_opt.jpg"},
		   {"id":5,"nombre":"Copa 2","descripcion":"Copa de helado","precio":4,"imagen":"http://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2012/08/helado_final.jpg"},
		   {"id":6,"nombre":"aSDFG","descripcion":"WETERY","precio":789,"imagen":"https://i.pinimg.com/originals/a4/08/54/a408547296fead57417de9da1a191904.png"},
		   {"id":7,"nombre":"Helado Asen","descripcion":"Asen Helado","precio":5000,"imagen":"https://i.pinimg.com/originals/a4/08/54/a408547296fead57417de9da1a191904.png"}]
		return res;
	}

	getArticulo(id){
		return this._http.get(this.url+'producto/' + id).map(res => res.json());
	}

	addProducto(producto:Producto){
		let json = JSON.stringify(producto);
		let params = 'producto='+json;
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'producto', json, {headers: headers}).map(res => res.json());
	}

	pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
	    let formdata: FormData = new FormData();
	 
	    formdata.append('file', file);
	 
	    const req = new HttpRequest('POST', '/post', formdata, {
	      reportProgress: true,
	      responseType: 'text'
	    });
	 
	    return this.http.request(req); 

	}

}