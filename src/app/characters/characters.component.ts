import { Component } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.sass'
})
export class CharactersComponent {

    constructor(private characterService:CharacterService) {

    }

    loadMore(){
      this.characterService.load();
    }
}
