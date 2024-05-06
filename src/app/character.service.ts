import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Character {
  name: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharaters(): Observable<Character[]> {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=20')
    .pipe(map(({info, results}:any) => results));
  }
}
