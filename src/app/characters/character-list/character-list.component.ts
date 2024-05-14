import { Component, OnInit } from '@angular/core';
import { Character, CharacterService } from '../character.service';
import { Observable, map, of, pipe, startWith, switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.sass'
})
export class CharacterListComponent implements OnInit {

  characters$: Observable<Character[]> = of<Character[]>([]);

  constructor(
    private ar: ActivatedRoute,
    private characterService:CharacterService) {
  }

  ngOnInit(): void {


    this.characters$ = this.ar.queryParams.pipe(
      map(({filter}:Params) => filter),
      startWith(''),
      switchMap((filter:string) =>
        this.characterService.characters
        .pipe(map((characters:Character[])=> filter ==='4' ? characters.slice(0,4): characters)))
    )

  }



}
