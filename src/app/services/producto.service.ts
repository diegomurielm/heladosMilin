import {Injectable} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductoService{
	public url:string;

	constructor(private _http:Http){
		this.url='http://localhost:8080/';
	}

	getArticulos(){
		return this._http.get(this.url+'productos')
						 .map(res => res.json());
	}

	getArticulo(id){
		return this._http.get(this.url+'producto/' + id).map(res => res.json());
	}

}