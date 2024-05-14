import { Component } from '@angular/core';
import { CharacterService } from './characters/character.service';
import { concatAll, forkJoin } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{

  constructor(private router:Router) {
  }



}




