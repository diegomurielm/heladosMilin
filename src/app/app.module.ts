import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { routing, appRoutingProviders} from './app.routing';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoDetalleComponent } from './components/producto-detalle.component';
import { NgbdCarouselBasic } from './components/carousel-basic';  
import { ErrorComponent } from './components/error.component';
import { ProductoAddComponent } from './components/producto-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgbdCarouselBasic,
    ProductosListComponent,
    ProductoDetalleComponent,
    ProductoAddComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
