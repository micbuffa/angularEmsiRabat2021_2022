import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Liste des assignments";
  couleur = "violet";
  // pour cacher/montrer le formulaire
  formVisible=false;
  assignmentSelectionne?:Assignment;

  assignments:Assignment[] = [];

  constructor(private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
    // appelé AVANT l'affichage (juste après le constructeur)
    console.log("AVANT AFFICHAGE");
    // on va demander au service de nous renvoyer les données (les assignments)
    // typiquement : le service envoie une requête AJAX sur un web service
    // du cloud...

    // TODO
    console.log("On demande les assignments au service")
    this.assignmentService.getAssignments()
    .subscribe(assignments => {
      // quand on rentre ici on sait que les données sont prêtes
      console.log("données reçues")
      this.assignments = assignments;
    });

    console.log("demande envoyée au service");
  }


  assignmentClique(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  onNouvelAssignment(assignment:Assignment) {
    console.log("evenement nouvelAssignment reçu par le père !!!")

    this.assignmentService.addAssignment(assignment)
    .subscribe(message => {
      console.log(message);
      // et on affiche à nouveau la liste !
      // comme on est dans le subscribe on est sur que les données
      // ont été ajoutées....
      this.formVisible = false;
    })
  }

  onDeleteAssignment(assignment:Assignment) {
    // On va le faire via un appel au service !

    /*
    // on supprime l'assignment de la liste
    const position = this.assignments.indexOf(assignment);
    const nombreElementsASupprimer = 1;

    this.assignments.splice(position, nombreElementsASupprimer);
    */
  }
}
