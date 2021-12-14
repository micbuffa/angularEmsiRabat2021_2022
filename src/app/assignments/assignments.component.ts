import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Liste des assignments";
  couleur = "violet";
  // pour le formulaire
  nomAssignment:string = "";
  dateDeRendu?:Date = undefined;
  assignmentSelectionne?:Assignment = undefined;

  assignments:Assignment[] = [
    {
      nom:"Devoir Angular proposé par Mr Buffa",
      dateDeRendu: new Date("2022-01-23"),
      rendu : false
    },
    {
      nom:"Devoir gestion de projet de Mr Winter",
      dateDeRendu: new Date("2022-01-10"),
      rendu : false
    },
    {
      nom:"Devoir Hybride de Mr Pascal Bohn",
      dateDeRendu: new Date("2021-11-01"),
      rendu : true
    }
  ]
  constructor() { }

  ngOnInit(): void {
    // appelé AVANT l'affichage (juste après le constructeur)
    console.log("AVANT AFFICHAGE");
  }

  onSubmit() {
    console.log(this.dateDeRendu);

    if(this.nomAssignment && this.dateDeRendu) {
      let nouvelAssignment = new Assignment();

      nouvelAssignment.nom = this.nomAssignment;
      nouvelAssignment.dateDeRendu = this.dateDeRendu;
      nouvelAssignment.rendu = false;

      this.assignments.push(nouvelAssignment);
    }
  }

  assignmentClique(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
  }
}
