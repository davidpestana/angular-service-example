import { Component, Input } from '@angular/core';
import { Character } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.sass'
})
export class CharacterComponent {
  @Input() character?: Character;

}
