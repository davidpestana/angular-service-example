import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { MiModuloModule } from './mi-modulo/mi-modulo.module';
import { FormsModule } from '@angular/forms';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { MiPipePipe } from './mi-pipe.pipe';
import { NgPipesModule } from 'ngx-pipes';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiDirectivaDirective,
    MiPipePipe,
    CharacterListComponent,
    CharacterComponent,

  ],
  imports: [
    // MiModuloModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgPipesModule,
    HttpClientModule
  ],
  providers: [ ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    /* añadir una logica*/

}
