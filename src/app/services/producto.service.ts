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
		return this._http.get(this.url+'productos')
						 .map(res => res.json());
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