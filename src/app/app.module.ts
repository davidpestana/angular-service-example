import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterNumberComponent } from './character-number/character-number.component';
import { CharacterPageComponent } from './character-page/character-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterComponent,
    CharacterNumberComponent,
    CharacterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    /* añadir una logica*/

}
