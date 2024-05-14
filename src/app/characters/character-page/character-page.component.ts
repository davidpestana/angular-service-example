import { Observable } from 'rxjs';
import { Character, CharacterService } from '../character.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.sass'
})
export class CharacterPageComponent {

    page$: Observable<number>;
    constructor(private characterService:CharacterService) {
      this.page$ = this.characterService.currentPage;
    }

}
