import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CAComponent } from './ca/ca.component';
import { CBComponent } from './cb/cb.component';
import { routes } from './routes';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteNoEncontradoComponent } from './cliente-no-encontrado/cliente-no-encontrado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CAComponent,
    CBComponent,
    ClientesComponent,
    ClienteNoEncontradoComponent,
    ClienteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    /* añadir una logica*/

}
