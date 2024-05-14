import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.sass'
})
export class ClienteComponent {

    params$: Observable<Params>
    cliente$: Observable<string>

    constructor(private activatedRoute:ActivatedRoute) {
      this.params$ = this.activatedRoute.params
      this.cliente$ = this.activatedRoute.params.pipe(
        map(({cliente}:Params) => cliente)
      )
      console.log('construido');
    }
}
