import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReservaQuartoComponent } from './reserva-quarto/reserva-quarto.component';
import { AdministradorComponent } from './administrador/administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReservaQuartoComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
