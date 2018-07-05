import {Component} from '@angular/core'
import { NgbdCarouselBasic } from '../components/carousel-basic';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html'
})
export class HomeComponent{

	public titulo:string;

	constructor(){
		this.titulo = "WebApp de productos";
	}

	onInit(){
		console.log("Se ha cargado el componete home");
	}
}