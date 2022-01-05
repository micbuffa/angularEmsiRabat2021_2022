import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from './assignments/assignment.model';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titre="Application de gestion des assignments";

  constructor(private authService:AuthService, private router:Router) {}

  onLogin() {
    if(this.authService.loggedIn) {
      this.authService.logOut();
      this.router.navigate(["/home"]);
    } else {
      this.authService.logIn();
    }
  }
}
