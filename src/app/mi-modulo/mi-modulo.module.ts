import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';



@NgModule({
  declarations: [
    MiPrimerComponenteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiPrimerComponenteComponent
  ],
  providers: []
})
export class MiModuloModule { }
