import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
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

  getAssignments():Observable<Assignment[]> {
    // imaginons qu'on envoie une requête dans le cloud
    // et que le serveur à son tour envoie une requête sur une BD
    // dans le cloud... on en sait pas exactement combien de temps
    // cela va prendre....
    // On va donc non pas renvoyer les données, mais plutôt un objet "observable".
    //
    return of(this.assignments);
  }

  addAssignment(assignment:Assignment):Observable<String> {
    this.assignments.push(assignment);

    return of("Service : assignment ajouté avec succès");
  }

  updateAssignment(assignment:Assignment):Observable<String> {
    // POUR LE MOMENT RIEN BESOIN DE FAIRE

    // Par la suite, on enverra une requête PUT dans le cloud
    // pour faire un update dans le base de données distante

    return of("Service : assignment modifié avec succès");
  }

  deleteAssignment(assignment:Assignment):Observable<String> {
  // a vous de faire !
  }
}
