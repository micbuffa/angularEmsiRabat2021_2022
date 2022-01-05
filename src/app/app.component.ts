import { Component } from '@angular/core';
import { Assignment } from './assignments/assignment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titre="Application de gestion des assignments";
}
