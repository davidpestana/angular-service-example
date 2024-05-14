import { Routes } from "@angular/router";
import { CAComponent } from "./ca/ca.component";
import { CBComponent } from "./cb/cb.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { ClienteNoEncontradoComponent } from "./cliente-no-encontrado/cliente-no-encontrado.component";
import { ClienteComponent } from "./cliente/cliente.component";

export const routes: Routes = [

  {
    path: 'clientes',
    component: ClientesComponent,
    children: [
      {path: ':cliente', component: ClienteComponent},
      {path: '**', component: ClienteNoEncontradoComponent}
    ]
  },{
    path: 'personajes',
    loadChildren: () => {
      console.log('pasa por la carga perezosa');
      return import('./characters/characters.module').then(m => m.CharactersModule);
    }

  }

]
