import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.sass'
})
export class ClientesComponent {

  clientes = ['david', 'juan', 'lorena']

}
