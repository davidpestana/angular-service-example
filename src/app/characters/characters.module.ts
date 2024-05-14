import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharacterNumberComponent } from './character-number/character-number.component';
import { CharacterComponent } from './character/character.component';
import { CharacterInfoComponent } from './character-info/character-info.component';



@NgModule({
  declarations: [
    CharactersComponent,
    CharacterListComponent,
    CharacterPageComponent,
    CharacterNumberComponent,
    CharacterComponent,
    CharacterInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class CharactersModule { }
