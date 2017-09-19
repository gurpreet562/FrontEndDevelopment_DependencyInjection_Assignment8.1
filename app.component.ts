import { Component } from '@angular/core';
import {demoService} from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[demoService]
})
export class AppComponent {
  title = 'app';
}
