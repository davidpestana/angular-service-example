import { Routes } from "@angular/router";
import { CharactersComponent } from './characters.component';
import { CharacterListComponent } from "./character-list/character-list.component";
import { CharacterNumberComponent } from "./character-number/character-number.component";
import { CharacterInfoComponent } from "./character-info/character-info.component";

export const routes:Routes =[
  {
      path:'',
      component: CharactersComponent,
      children: [ {
        path:'feed',
        component: CharacterListComponent
      },{
        path:'contador',
        component: CharacterNumberComponent
      },
      {
        path: ':characterId',
        component: CharacterInfoComponent
      }
    ]

  },

  // {   path: 'feed',
  //     component: CharacterListComponent
  // }

]
