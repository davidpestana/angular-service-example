import { Component } from '@angular/core';
import { CharacterService } from '../character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-number',
  templateUrl: './character-number.component.html',
  styleUrl: './character-number.component.sass'
})
export class CharacterNumberComponent {
  value$:Observable<number>;

  constructor(private characterService: CharacterService) {
    this.value$ = this.characterService.value;
  }

}
