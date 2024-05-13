import { Component } from '@angular/core';
import { CharacterService } from './character.service';
import { concatAll, forkJoin } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{

  constructor(private characterService:CharacterService) {

  }



  load(){
    this.characterService.load();
  }

  clear(){
    this.characterService.clear();
  }
}




