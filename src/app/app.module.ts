import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { PruebaInicialComponent } from './prueba-inicial/prueba-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaInicialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent,PruebaInicialComponent]
})
export class AppModule { }
