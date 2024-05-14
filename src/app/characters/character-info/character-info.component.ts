import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { Observable, filter, map, switchMap } from 'rxjs';
import { Character, CharacterService } from '../character.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.sass'
})
export class CharacterInfoComponent {

  character$: Observable<Character> ;

  constructor(
    private ar: ActivatedRoute,
    private cs: CharacterService
  ) {
    this.character$ = this.ar.params.pipe(
      map(({characterId}:Params) => characterId),
      switchMap((characterId:string) => this.cs.findOne(characterId)),
    )
  }

}
