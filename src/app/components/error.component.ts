import { Component } from '@angular/core'

@Component({
	selector: 'error',
	templateUrl: '../views/error.html'
})
export class ErrorComponent{
	public titulo:string;

	constructor(){
		this.titulo = 'Página no encontrada';
	}

}