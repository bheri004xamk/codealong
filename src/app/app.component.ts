import { TehtavalistaService } from './tehtavalista.service';
import { Component } from '@angular/core';
import { Tehtava } from './tehtava';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(protected tehtavalista : TehtavalistaService) {

  }
  


}
