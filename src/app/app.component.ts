import { Component } from '@angular/core';
import {clickedStateTrigger, numberEnteredStateTrigger} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    clickedStateTrigger,
    numberEnteredStateTrigger
  ]
})
export class AppComponent {
  // title = 'app';
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntered;

  onClickSimple() {
   this.clickInfo = 'clicked';
   setTimeout(() => {
     this.clickInfo = 'default';
   }, 3000);
  }
}
