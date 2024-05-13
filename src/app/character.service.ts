import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject, of, tap } from 'rxjs';

export interface Character {
  name: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private _characters = new BehaviorSubject<Character[]>([]);
  private _page = new BehaviorSubject<number>(1);

  constructor(private http: HttpClient) {
    this.load();
  }

  get characters():Observable<Character[]> {
    return this._characters.asObservable();
  }

  get value():Observable<number> {
    return this.characters.pipe(
      map((characters:Character[]) => characters.length )
    );
  }

  get currentPage(): Observable<number> {
    return this.nextPage.pipe(map((page) => page-1));
  }

  get nextPage(): Observable<number> {
    return this._page.asObservable()
  }

  load(): void {
    let s = this.http.get('https://rickandmortyapi.com/api/character/?page=' + this._page.value)
    .pipe(map(({info, results}:any) => results))
    .subscribe((characters: Character[]) => {
      this._characters.next(this._characters.value.concat(characters))
      this._page.next(this._page.value+1);
    } );
  }

  clear(): void {
    this._characters.next([]);
    this._page.next(1);
  }




}
