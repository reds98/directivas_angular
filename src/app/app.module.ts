import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './paginas/home/home.component';
import { AboutComponent } from './paginas/about/about.component';
import { AnunciosComponent } from './compartido/anuncios/anuncios.component';
import { NavbarHomeComponent } from './home-components/navbar-home/navbar-home.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    BannerComponent,
    HomeComponent,
    AboutComponent,
    AnunciosComponent,
    NavbarHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
