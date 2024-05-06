import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character, CharacterService } from '../character.service';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.sass'
})
export class CharacterListComponent implements OnInit {

  characters$: Observable<Character[]> = of<Character[]>([]);

  constructor(private characterService:CharacterService) {
  }

  ngOnInit(): void {
    this.characters$ = this.characterService.getCharaters();
  }



}
