import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Character } from '../character.service';
import { BehaviorSubject, Subject } from 'rxjs';


export interface Location {
  lat: number,
  lng: number,
}
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.sass'
})
export class CharacterComponent {
  @Input() character?: Character | undefined | null;
}
