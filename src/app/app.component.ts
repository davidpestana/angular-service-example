import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{
  now = new Date();

  // timeAgo also supports moment.js objects
  lastWeek = moment().subtract(10, 'minutes');

}




