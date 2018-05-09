import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';//Muy importante
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { MiHttpService } from './mi-servicio/mi-http.service'; //Muy importante

import {HttpClientModule} from '@angular/common/http';//Post


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
