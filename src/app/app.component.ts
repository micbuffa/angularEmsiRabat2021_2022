import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from './assignments/assignment.model';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titre="Application de gestion des assignments";

  constructor(private authService:AuthService, private router:Router, private assignmentService: AssignmentsService) {}

  onLogin() {
    if(this.authService.loggedIn) {
      this.authService.logOut();
      this.router.navigate(["/home"]);
    } else {
      this.authService.logIn();
    }
  }

  initialiserLaBaseAvecDonneesDeTest() {
    this.assignmentService.peuplerBDAvecForkJoin()
    .subscribe(() => {
      console.log("##### initialiserLaBaseAvecDonneesDeTest : DONNES AJOUTEES ! ######");
      // et on va afficher la liste des assignments
      this.router.navigate(["/home"], {replaceUrl:true});
    })


  }
}
